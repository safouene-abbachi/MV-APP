import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";

const Item = ({ item, onPress, backgroundColor, textColor, poster, title }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image
      style={styles.tinyLogo}
      source={{
        uri: poster,
      }}
    />

    <View style={styles.titleWrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const Genres = ({ data, navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    console.log({ item });
    const color = item.id === selectedId ? "white" : "black";
    const screenNavigate = () => {
      setSelectedId(item.id);
      navigation.navigate("Details", item);
    };
    return (
      <Item
        item={item}
        onPress={() => screenNavigate()}
        textColor={{ color }}
        poster={item.poster}
        title={item.title}
        navigation={navigation}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        horizontal={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 0,
  },
  tinyLogo: {
    width: 120,
    height: 200,
    borderRadius: 20,
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    color: "#FFF",
    marginLeft: "auto",
    marginRight: "auto",
    width: 100,
  },
  titleWrapper: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Genres;
