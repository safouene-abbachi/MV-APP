import { API_HEADER } from "./config";
import { groupBy } from "./services";
import axios from "axios";

export const URL = `https://wookie.codesubmit.io/movies`;

const getMoviesByGenres = (arr) => {
  const genres = {
    ACTION: [],
    THRILLER: [],
    ADVENTURE: [],
    BIOGRAPHY: [],
    CRIME: [],
    DRAMA: [],
    MYSTERY: [],
    ROMANCE: [],
  };
  arr.forEach((element) => {
    console.log(element["genres"]);
    const type = element["genres"];
    if (type.includes("Action")) {
      return genres["ACTION"].push(element);
    }
    if (type.includes("Adventure")) {
      return genres["ADVENTURE"].push(element);
    }
    if (type.includes("Thriller")) {
      return genres["THRILLER"].push(element);
    }
    if (type.includes("Crime")) {
      return genres["CRIME"].push(element);
    }
    if (type.includes("Romance")) {
      return genres["ROMANCE"].push(element);
    }

    if (type.includes("Drama")) {
      return genres["DRAMA"].push(element);
    }
    if (type.includes("Mystery")) {
      return genres["MYSTERY"].push(element);
    }

    if (type.includes("Biography")) {
      return genres["BIOGRAPHY"].push(element);
    }
  });
  console.log("FINAL", genres);
  return genres;
};

export const getMovies = async () => {
  const results = await axios.get(URL, {
    headers: {
      Authorization: `${API_HEADER}`,
    },
  });

  const moviesByGenre = results.data["movies"];
  return getMoviesByGenres(moviesByGenre);
};

export const searchMovieByTerm = async (searchTerm) => {
  try {
    const filtredMovies = await axios.get(`${URL}?q=${searchTerm}`, {
      headers: {
        Authorization: `${API_HEADER}`,
      },
    });
    console.log("success");

    return getMoviesByGenres(filtredMovies.data["movies"]);
  } catch (error) {
    console.log(error);
  }
};
