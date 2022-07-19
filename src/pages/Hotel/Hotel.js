import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import { reducer } from "../../reducer";
import ReducerContext from "../../context/reducerContext";
const Hotel = (props) => {
  const { id } = useParams();
  const [hotel, setHotel] = useState({});
  const reducer = useContext(ReducerContext);

  const fetchHotel = () => {
    setHotel({
      id: 1,
      name: "Pod akacjami",
      city: "Białystok",
      rating: 8.3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "",
    });
    reducer.dispatch({ type: "set-loading", loading: false });
  };

  useEffect(() => {
    reducer.dispatch({ type: "set-loading", loading: true });
    setTimeout(() => {
      fetchHotel();
    }, 500);
  }, []);

  if (reducer.state.loading) return null;

  return <h1>hotel: {hotel.name} </h1>;
};

export default Hotel;
