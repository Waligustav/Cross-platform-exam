import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharacterList from "../components/Lists/CharacterList";
import { RootParams } from "../types/RootParams";
import { CharacterDetailsScreen } from "../screens/CharacterDetailsScreen";

export default function CharacterNavigator() {
  const Stack = createNativeStackNavigator<RootParams>();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}
    >
      <Stack.Screen name="CharacterList" component={CharacterList} />
      <Stack.Screen
        name="CharacterDetails"
        component={CharacterDetailsScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}
