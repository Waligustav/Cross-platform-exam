import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharacterListScreen from "../screens/CharacterListScreen";
import CharacterScreen from "../screens/CharacterScreen";

export type RootImageParamList = {
  ImageFeed: undefined;
  Image: { uri: string };
};

export default function ImageNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}
    >
      <Stack.Screen name="ImageFeed" component={CharacterListScreen} />
      <Stack.Screen name="Image" component={CharacterScreen} />
    </Stack.Navigator>
  );
}
