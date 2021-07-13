import React, { useContext } from "react";
import { Context } from "../Context";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
export default function Favorite() {
  const { favorite } = useContext(Context);
  console.log("DDD", Object.values(favorite));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FAVORITE</Text>
      <View style={styles.searchcontainer}>
        <ScrollView vertical={true} contentContainerStyle={styles.scrollView}>
          {favorite &&
            Object.values(favorite).map((fav, i) => {
              console.log({ fav });
              return (
                //Passing the movie genre in the key attribute and not the index (as discussed in the interview)
                <View key={i} style={styles.container}>
                  <TouchableOpacity style={styles.item}>
                    <View style={styles.titleWrapper}>
                      <Text style={styles.title}>{fav.title}</Text>
                    </View>
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: fav.poster,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          <View style={{ height: 300 }} />
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
  tinyLogo: {
    width: 120,
    height: 200,
    borderRadius: 20,
    left: "30%",
  },
});
