import React from "react";
import { SafeAreaView } from "react-native";
import CharacterListScreen from "./app/screens/CharacterListScreen";
import CharacterScreen from "./app/screens/CharacterScreen";

export default function App() {
  return (
    <SafeAreaView>
      <CharacterScreen characterId={109} />
      <CharacterListScreen />
    </SafeAreaView>
  );
}
