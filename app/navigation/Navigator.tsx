import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharacterList from "../components/Character/CharacterList";
import { RootStackParamList } from "../types/RootStackParamList";
import LocationsScreen from "../screens/LocationsScreen";
import { CharacterDetailsScreen } from "../screens/CharacterDetailsScreen";

export default function Navigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
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
      <Stack.Screen name="LocationScreen" component={LocationsScreen} />
    </Stack.Navigator>
  );
}
