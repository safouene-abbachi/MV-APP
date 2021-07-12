import React, { useState, useEffect, createContext } from "react";
import { getMovies } from "./api";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [gallery, setGallery] = useState([]);
  const [favorite, setFavorite] = useState([]);

  //Fetching Movies
  useEffect(() => {
    (async () => {
      try {
        const movies = await getMovies();
        setGallery(movies);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Context.Provider
      value={{ gallery, setGallery, search, setSearch, favorite, setFavorite }}
    >
      {children}
    </Context.Provider>
  );
};
