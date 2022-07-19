import React from "react";
import { useParams } from "react-router-dom";



const Search = () => {
    const {term} = useParams();

    const searchHandler = (term) => {
  //     const newHotels = [...backendHotels].filter((x) =>
  //       x.name.toUpperCase().includes(term.toUpperCase())
  //     );
    };
  return <div>Wyniki dla frazy "{term}"</div>;
};

export default Search;
