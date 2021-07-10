import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ContextProvider = createContext();
export const Context = ({ children }) => {
  const [gallery, setGallery] = useState([]);

  //Fetching Movies from API
  useEffect(() => {
    (async () => {
      const movies = await axios.get(`https://wookie.codesubmit.io/movies`, {
        headers: {
          Authorization: "Bearer Wookie2019",
        },
      });
      setGallery(movies);
    })();
  }, []);

  return (
    <ContextProvider.Provider
      value={{
        gallery,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
