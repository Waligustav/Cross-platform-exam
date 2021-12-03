import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import LoginNavigator from "./app/navigation/LoginNavigator";
import CharacterListScreen from "./app/screens/CharacterListScreen";
import CharacterScreen from "./app/screens/CharacterScreen";

export default function App() {
  return (
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
    /* 
    <SafeAreaView>
      <CharacterScreen characterId={109} />
      <CharacterListScreen />
    </SafeAreaView>
  */
  );
}
