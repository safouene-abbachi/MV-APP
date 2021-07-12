export const getMoviesByGenres = (arr) => {
  const genres = {
    ACTION: [],
    THRILLER: [],
    CRIME: [],
    ADVENTURE: [],
    BIOGRAPHY: [],
    DRAMA: [],
    MYSTERY: [],
    ROMANCE: [],
  };
  arr.forEach((element) => {
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
  return genres;
};
