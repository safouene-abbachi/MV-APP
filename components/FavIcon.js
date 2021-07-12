import React, { useContext, useState } from "react";
import { Context } from "../Context";
import { IconButton, Colors } from "react-native-paper";

function FavIcon({ item }) {
  const [color, setColor] = useState(false);
  const { favorite, setFavorite } = useContext(Context);
  const addToFavorite = (idx) => {
    setColor(!color);
    setFavorite([...favorite, item]);
  };
  return (
    <IconButton
      style={{ left: 67, top: 50, zIndex: 1 }}
      icon="heart"
      color={color ? Colors.red500 : "silver"}
      size={35}
      onPress={() => addToFavorite(item.id)}
    />
  );
}

export default FavIcon;
