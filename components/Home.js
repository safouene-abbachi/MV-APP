import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
} from "react-native";

import { getMovies, searchMovieByTerm, genres } from "../api";
import Genres from "./Genres";

export default function Home({ navigation }) {
  const [state, setState] = useState({
    search: "",
    gallery: [],
  });

  //Fetching Movies
  useEffect(() => {
    (async () => {
      try {
        const movies = await getMovies();

        setState({ gallery: movies });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  //Searching movie by Term

  const searchMovie = async () => {
    try {
      const filtredMoviesByTerm = await searchMovieByTerm(state.search);
      setState({ gallery: filtredMoviesByTerm });
      console.log("success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WOOKIE MOVIES</Text>
      <View style={styles.searchcontainer}>
        <TextInput
          value={state.search}
          placeholder="Enter Movie..."
          style={styles.searchbox}
          onChangeText={(text) => setState({ search: text })}
        />
        <Button title="Search" onPress={() => searchMovie()} />
        <ScrollView vertical={true}>
          {console.log("YAS", state.gallery && Object.entries(state.gallery))}
          {state.gallery &&
            Object.entries(state.gallery).map((gr, i) => {
              return (
                <View key={i} style={styles.container}>
                  <Text style={styles.title}>
                    {gr[1].length !== 0 ? gr[0] : ""}
                  </Text>
                  <Genres navigation={navigation} data={gr[1]} />
                </View>
              );
            })}
          <View style={{ height: 400 }} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  searchbox: {
    fontSize: 20,
    fontWeight: "300",
    padding: 20,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginBottom: 40,
  },
});
