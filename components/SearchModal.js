import React, { useContext } from "react";
import { Context } from "../Context";
import { searchMovieByTerm } from "../api";
import { View, Button, TextInput, StyleSheet, Text } from "react-native";
export default function SearchModal({ navigation }) {
  const { search, setGallery, setSearch } = useContext(Context);

  const searchMovie = async () => {
    try {
      const filtredMoviesByTerm = await searchMovieByTerm(search);
      setGallery(filtredMoviesByTerm);
      setSearch("");
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.title}>Search Movie</Text>
      <TextInput
        value={search}
        placeholder="Enter Movie..."
        style={styles.searchbox}
        onChangeText={(text) => setSearch(text)}
      />
      <Button
        style={styles.button}
        title="SEARCH"
        onPress={() => searchMovie()}
      />
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
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginBottom: 40,
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
