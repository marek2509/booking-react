import React, { useEffect, useState } from "react";
import LastHotel from "../../components/Hotels/LastHotel/LastHotel";
import useStateStorage from "../../hooks/useStateStorage";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import BestHotel from "../../components/Hotels/BestHotel/BestHotel";
import Hotels from "../../components/Hotels/Hotels";
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
  const [loading, setLoading] = useState(true);
  const [hotels, setHotels] = useState([{}]);

  const getBestHotel = () => {
    if (hotels.length < 2) {
      return null;
    } else {
      // return hotels.sort(h => h.rating).reverse()[0];
      return hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0];
    }
  };

  const openHotel = (hotel) => {
    setLastHotel(hotel);
  };

  const removeLastHotel = () => {
    setLastHotel(null);
  };

  useEffect(() => {
    setTimeout(() => {
      setHotels(backendHotels);
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <LoadingIcon />
  ) : (
    <>
      {lastHotel ? (
        <LastHotel {...lastHotel} onRemove={removeLastHotel} />
      ) : null}
      {getBestHotel() ? <BestHotel getHotel={getBestHotel} /> : null}
      <Hotels onOpen={openHotel} hotels={hotels} />
    </>
  );
};

export default Home;
