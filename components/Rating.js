import React from "react";
import { StyleSheet, View, Image } from "react-native";

const Rating = ({ rate }) => {
  let stars = [];
  const roundRate = Math.round(rate / 2);
  console.log({ roundRate });
  const getRate = () => {
    for (let i = 0; i < 5; i++) {
      if (i < roundRate) {
        stars.push(
          <Image
            key={i}
            source={require("../assets/star.png")}
            fadeDuration={0}
            style={{ width: 40, height: 40 }}
          />
        );
      } else {
        stars.push(
          <Image
            key={i}
            source={require("../assets/black-star.png")}
            fadeDuration={0}
            style={{ width: 40, height: 40 }}
          />
        );
      }
    }
    return stars;
  };
  return <View style={styles.container}>{getRate()}</View>;
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 40,
    height: 40,
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
});

export default Rating;
