import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import TabNavigator from "./TabNavigator";
import { RootParams } from "../types/RootParams";

export default function LoginNavigator() {
  const Stack = createNativeStackNavigator<RootParams>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Authenticated" component={TabNavigator} />
    </Stack.Navigator>
  );
}
