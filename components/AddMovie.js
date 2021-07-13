import React, { useContext, useState } from "react";
import { Context } from "../Context";
import uuid from "react-native-uuid";

import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  Button,
} from "react-native";

export default function AddMovie({ navigation }) {
  const { setGallery, gallery } = useContext(Context);
  const [state, setState] = useState({
    title: "",
    poster: "",
    backdrop: "",
    imdb_rating: null,
    released_on: "",
    actors: "",
    cast: [],
    length: "",
    overview: "",
    genre: "",
    id: uuid.v4(),
  });
  //handling the change of state values
  const handleChange = (key, text) => {
    setState((previous) => ({ ...previous, [key]: text }));
  };
  //adding a movie
  const addMovie = (genre, newMovie) => {
    setState({ ...state, cast: [...state.cast, state.actors] });
    setGallery({ ...gallery, [genre]: [...gallery[genre], newMovie] });
    navigation.navigate("Home");
    // initial state
    setState({
      title: "",
      poster: "",
      backdrop: "",
      imdb_rating: null,
      released_on: "",
      actors: "",
      cast: [],
      length: "",
      overview: "",
      genre: "",
      id: "",
    });
  };

  return (
    <ScrollView style={{ padding: 40 }} vertical={true}>
      <View style={styles.container}>
        <Text style={styles.title}>Add Movie</Text>
        <TextInput
          value={state.genre}
          placeholder="Type movie genre..."
          style={styles.searchbox}
          onChangeText={(text) => handleChange("genre", text)}
          autoCapitalize={("sentences", "words", "characters")}
          keyboardType="default"
        />
        <TextInput
          value={state.title}
          placeholder="Movie title..."
          style={styles.searchbox}
          onChangeText={(text) => handleChange("title", text)}
        />
        <TextInput
          value={state.poster}
          placeholder="Movie poster..."
          style={styles.searchbox}
          onChangeText={(text) => handleChange("poster", text)}
        />
        <TextInput
          value={state.backdrop}
          placeholder="Movie backdrpm..."
          style={styles.searchbox}
          onChangeText={(text) => handleChange("backdrop", text)}
        />
        <TextInput
          value={state.actors}
          placeholder="Cast..."
          style={styles.searchbox}
          onChangeText={(text) => handleChange("actors", text)}
        />
        <TextInput
          value={state.imdb_rating}
          placeholder="Movie imdb_rating..."
          keyboardType="numeric"
          style={styles.searchbox}
          onChangeText={(text) => handleChange("imdb_rating", text)}
        />
        <TextInput
          value={state.released_on}
          placeholder="Movie released_on..."
          style={styles.searchbox}
          keyboardType="numeric"
          onChangeText={(text) => handleChange("released_on", text)}
        />
        <TextInput
          value={state.length}
          placeholder="Enter length..."
          style={styles.searchbox}
          onChangeText={(text) => handleChange("length", text)}
        />
        <TextInput
          value={state.overview}
          placeholder="Enter overview..."
          style={styles.searchbox}
          onChangeText={(text) => handleChange("overview", text)}
        />

        <Button
          style={styles.button}
          title="Add movie"
          onPress={() => addMovie(state.genre, state)}
        />
      </View>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  searchbox: {
    fontSize: 20,
    fontWeight: "300",
    padding: 20,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 21,
    marginBottom: 20,
    fontWeight: "bold",

    color: "#FFF",
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    color: "#748c94",
    borderRadius: 9,
  },
});
