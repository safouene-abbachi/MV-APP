import React, { useState, useCallback, useContext } from "react";
import { getMovies } from "../api";
import Genres from "./Genres";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Context } from "../Context";
// Refreshing the home page when scroll down
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const Home = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  // Getting the state from te context provider
  const { gallery, setGallery } = useContext(Context);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    const movies = await getMovies();
    setGallery(movies);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WOOKIE MOVIES</Text>
      <View style={styles.searchcontainer}>
        <ScrollView
          vertical={true}
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {gallery &&
            Object.entries(gallery).map((gr, i) => {
              const movieGenre = gr[0];
              const movie = gr[1];
              return (
                //Passing the movie genre in the key attribute and not the index (as discussed in the interview)
                <View key={movieGenre} style={styles.container}>
                  <Text style={styles.title}>
                    {movie.length !== 0 ? movieGenre : ""}
                  </Text>
                  <Genres navigation={navigation} data={movie} />
                </View>
              );
            })}
          <View style={{ height: 300 }} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    paddingTop: 30,
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

export default Home;
