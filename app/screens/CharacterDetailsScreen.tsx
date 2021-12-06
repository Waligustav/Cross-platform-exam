import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView } from "react-native";
import { RootParams } from "../types/RootParams";
import CharacterScreen from "./CharacterScreen";

export const CharacterDetailsScreen = ({
  route,
}: NativeStackScreenProps<RootParams, "CharacterDetails">) => {
  return (
    <SafeAreaView>
      <CharacterScreen characterId={route.params.characterId} />
    </SafeAreaView>
  );
};
