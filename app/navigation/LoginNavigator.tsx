import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import TabNavigator from "./TabNavigator";
import { RootStackParamList } from "../types/RootStackParamList";

export default function LoginNavigator() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Authenticated" component={TabNavigator} />
    </Stack.Navigator>
  );
}
