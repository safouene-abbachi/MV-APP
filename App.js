import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./components/BottomTab";
import { ContextProvider } from "./Context";

const MyTheme = {
  dark: true,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "#223343",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer theme={MyTheme}>
        <BottomTab />
      </NavigationContainer>
    </ContextProvider>
  );
}
