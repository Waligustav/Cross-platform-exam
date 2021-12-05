import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import LoginNavigator from "./app/navigation/LoginNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
  );
}
