import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  id,
} from "react-native";

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
  } = route.params;
  const image = { uri: backdrop };
  const year = new Date(released_on).getFullYear();
  console.log(backdrop);
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

          <View>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>RATING</Text>
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
        {cast.map((actor, i) => {
          return (
            <Text key={i} style={styles.desc}>
              {actor},
            </Text>
          );
        })}
      </View>

      <Text style={styles.title}>MOVIE DESCRIPTION</Text>
      <Text style={{ color: "white", bottom: -120, textAlign: "center" }}>
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
    flex: 0.5,

    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    fontSize: 21,
    lineHeight: 84,

    fontWeight: "bold",
    textAlign: "right",
    paddingLeft: 10,
    top: 200,

    color: "#FFF",
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    fontSize: 21,
    textDecorationLine: "underline",
    fontWeight: "bold",

    bottom: -100,

    color: "#FFF",
    marginLeft: "auto",
    marginRight: "auto",
  },
  tinyLogo: {
    width: 150,
    height: 220,
    top: 200,
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
    top: 210,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  cast: {
    bottom: -100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});
