import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Details from "./Details";
import Home from "./Home";
import SearchModal from "./SearchModal";
import AddMovie from "./AddMovie";
import Favorite from "./Favorite";
import { StyleSheet, Text, View, Image } from "react-native";
// THE NAVIGATION COMPONENET
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          elevation: 0,
          backgroundColor: "black",

          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text style={{ color: focused ? "#e32f45" : "#748c94" }}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/enable.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text style={{ color: focused ? "#e32f45" : "#748c94" }}>
                Previous
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/heart.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text style={{ color: focused ? "#e32f45" : "#748c94" }}>
                Favorite
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddMovie"
        component={AddMovie}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/add.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text style={{ color: focused ? "#e32f45" : "#748c94" }}>
                Add
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchModal"
        component={SearchModal}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/search.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text style={{ color: focused ? "#e32f45" : "#748c94" }}>
                SEARCH
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
