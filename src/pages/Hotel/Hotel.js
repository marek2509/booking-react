import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

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

const Hotel = (props) => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const setTitle = useWebsiteTitle();

  const fetchHotel = () => {
    setHotel(backendHotels.filter((h) => h.id == id)[0]);
	console.log(backendHotels.filter((h) => h.id == id)[0]);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchHotel();
    }, 500);
  }, []);

  useEffect(() => {
    if (hotel != null) {
      setTitle(hotel.name);
    }
  }, [hotel]);


console.log(hotel);
  return loading ? <LoadingIcon /> : <h1>hotel: {hotel.name} </h1>;
};

export default Hotel;
