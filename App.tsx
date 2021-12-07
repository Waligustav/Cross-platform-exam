import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Platform } from "react-native";
import colors from "./app/config/colors";
import LoginNavigator from "./app/navigation/LoginNavigator";

export default function App() {
  let osColor = colors.mellowYellow;

  if (Platform.OS === "ios") {
    osColor = colors.blue;
  }
  if (Platform.OS === "android") {
    osColor = colors.ashyGreen;
  }
  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: osColor,
    },
  };
  return (
    <NavigationContainer theme={Theme}>
      <LoginNavigator />
    </NavigationContainer>
  );
}
