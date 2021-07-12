import React from "react";
import { Text, View, ImageBackground, StyleSheet, Image } from "react-native";
import Rating from "./Rating";

export default function Details({ route }) {
  const {
    title,
    backdrop,
    poster,
    released_on,
    length,
    director,
    cast,
    overview,
    imdb_rating,
  } = route.params;
  const image = { uri: backdrop };
  const year = new Date(released_on).getFullYear();

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: poster,
            }}
          />

          <View
            style={{
              top: 250,
              paddingLeft: 10,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Text style={styles.text}>{title}</Text>
            <Rating rate={imdb_rating} />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.details}>
        <Text style={styles.desc}>{year}</Text>
        <Text style={styles.separator}>|</Text>
        <Text style={styles.desc}>{length}</Text>
        <Text style={styles.separator}>|</Text>
        <Text style={styles.desc}>{director}</Text>
      </View>
      <View style={styles.cast}>
        <Text style={styles.desc}>CAST :</Text>
        {cast.map((actor) => {
          return (
            <Text key={actor} style={styles.desc}>
              {actor},
            </Text>
          );
        })}
      </View>

      <Text style={styles.title}>MOVIE DESCRIPTION</Text>
      <Text style={{ color: "white", bottom: -70, textAlign: "center" }}>
        {overview}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    flex: 0.6,

    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    fontSize: 21,
    fontWeight: "bold",
    paddingLeft: 10,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#FFF",
    marginLeft: "auto",
    marginRight: "auto",
    width: 200,
  },
  title: {
    fontSize: 21,
    textDecorationLine: "underline",
    fontWeight: "bold",

    bottom: -50,

    color: "#FFF",
    marginLeft: "auto",
    marginRight: "auto",
  },
  tinyLogo: {
    width: 150,
    height: 220,
    top: 150,
    borderRadius: 5,
    marginLeft: 10,
  },
  imgContainer: {
    display: "flex",
    flexDirection: "row",
  },
  desc: {
    color: "white",
    marginLeft: 10,

    fontSize: 15,
    lineHeight: 84,
  },
  separator: {
    borderLeftWidth: 4,
    height: 25,
    marginLeft: 10,
    marginRight: 5,
    top: 31,
  },
  details: {
    top: 150,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  cast: {
    bottom: -40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});
