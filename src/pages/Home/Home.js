import React, { useEffect, useContext } from "react";
import LastHotel from "../../components/Hotels/LastHotel/LastHotel";
import useStateStorage from "../../hooks/useStateStorage";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import BestHotel from "../../components/Hotels/BestHotel/BestHotel";
import Hotels from "../../components/Hotels/Hotels";
import ReducerContext from "../../context/reducerContext";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";

const backendHotels = [
  {
    id: 1,
    name: "Pod akacjami",
    city: "Białystok",
    rating: 8.3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "",
  },
  {
    id: 2,
    name: "Poniatowski",
    city: "Suchowola",
    rating: 8.2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "",
  },
];

const Home = (props) => {
  useWebsiteTitle("Strona główna");
  const [lastHotel, setLastHotel] = useStateStorage("last-hotel", null);
  const reducer = useContext(ReducerContext);

  const getBestHotel = () => {
    if (reducer.state.hotels.length < 2) {
      return null;
    } else {
      // return reducer.state.hotels.sort(h => h.rating).reverse()[0];
      return reducer.state.hotels.sort((a, b) =>
        a.rating > b.rating ? -1 : 1
      )[0];
    }
  };

  const openHotel = (hotel) => {
    setLastHotel(hotel);
  };

  const removeLastHotel = () => {
    setLastHotel(null);
  };

  useEffect(() => {
    reducer.dispatch({ type: "set-loading", loading: true });
    setTimeout(() => {
      // setHotels(backendHotels);
      // setLoading(false);
      reducer.dispatch({ type: "set-hotels", hotels: backendHotels });
      reducer.dispatch({ type: "set-loading", loading: false });
    }, 1000);
  }, []);

  if (reducer.state.loading) {
    return null;
  }
  return (
    <>
      {lastHotel ? (
        <LastHotel {...lastHotel} onRemove={removeLastHotel} />
      ) : null}
      {getBestHotel() ? <BestHotel getHotel={getBestHotel} /> : null}
      <Hotels onOpen={openHotel} hotels={reducer.state.hotels} />
    </>
  );
};

export default Home;
