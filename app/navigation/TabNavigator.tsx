import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";
import ProfileScreen from "../screens/ProfileScreen";

import CharacterNavigator from "./CharacterNavigator";
import LocationNavigator from "./LocationNavigator";
import { RootParams } from "../types/RootParams";

export default function TabNavigator({
  route,
}: NativeStackScreenProps<RootParams, "Authenticated">) {
  const Tab = createBottomTabNavigator<RootParams>();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "white",
        tabBarActiveTintColor: "#4c5e4d",
        tabBarInactiveBackgroundColor: "white",
        tabBarInactiveTintColor: "#4c5e4d",
      }}
    >
      <Tab.Screen
        name="Characters"
        component={CharacterNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name={focused ? "image" : "images"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Locations"
        component={LocationNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name={focused ? "globe-americas" : "globe-africa"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{
          username: route.params.username,
          imageUri: route.params.imageUri,
        }}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name={focused ? "user-alt" : "user-circle"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
