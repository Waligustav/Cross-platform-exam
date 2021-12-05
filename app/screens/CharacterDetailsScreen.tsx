import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView } from "react-native";
import { RootStackParamList } from "../types/RootStackParamList";
import CharacterScreen from "./CharacterScreen";

export const CharacterDetailsScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, "CharacterDetails">) => {
  return (
    <SafeAreaView>
      <CharacterScreen characterId={route.params.characterId} />
    </SafeAreaView>
  );
};
