import { API_HEADER } from "./config";
import axios from "axios";
import { getMoviesByGenres } from "./service";
export const URL = `https://wookie.codesubmit.io/movies`;

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

    return getMoviesByGenres(filtredMovies.data["movies"]);
  } catch (error) {
    console.log(error);
  }
};
