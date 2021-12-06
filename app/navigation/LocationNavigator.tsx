import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootParams } from "../types/RootParams";

import { LocationDetailsScreen } from "../screens/LocationDetailsScreen";
import LocationList from "../components/Location/LocationList";

export default function LocationNavigator() {
  const Stack = createNativeStackNavigator<RootParams>();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}
    >
      <Stack.Screen name="LocationList" component={LocationList} />
      <Stack.Screen
        name="LocationDetails"
        component={LocationDetailsScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}
