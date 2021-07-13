import React, { useContext, useState } from "react";
import { Context } from "../Context";
import { IconButton, Colors } from "react-native-paper";

function FavIcon({ item }) {
  const [color, setColor] = useState(false);
  const { favorite, setFavorite } = useContext(Context);

  // Toggle heart icon between delete and add from favorite array
  const toggleIcon = (id) => {
    if (color === false) {
      setColor(!color);
      setFavorite([...favorite, item]);
    } else {
      const remainingMovies = favorite.filter((el) => el.id !== id);
      setFavorite(remainingMovies);
      setColor(!color);
    }
  };

  //  const toggleIcon = color ? removeFromFavorite() : addToFavorite();
  return (
    <IconButton
      style={{ left: 67, top: 50, zIndex: 1 }}
      icon="heart"
      color={color ? Colors.red500 : "silver"}
      size={35}
      onPress={() => toggleIcon(item.id)}
    />
  );
}

export default FavIcon;
