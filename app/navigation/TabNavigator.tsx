import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";
import ProfileScreen from "../screens/ProfileScreen";
import colors from "../config/colors";

import CharacterNavigator from "./CharacterNavigator";
import LocationNavigator from "./LocationNavigator";
import { RootParams } from "../types/RootParams";
import { Platform } from "react-native";

export default function TabNavigator({
  route,
}: NativeStackScreenProps<RootParams, "Authenticated">) {
  const Tab = createBottomTabNavigator<RootParams>();
  let osColor = colors.mellowYellow;

  if (Platform.OS === "ios") {
    osColor = colors.mellowBlue;
  }
  if (Platform.OS === "android") {
    osColor = colors.mellowGreen;
  }
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "white",
        tabBarActiveTintColor: osColor,
        tabBarInactiveBackgroundColor: "white",
        tabBarInactiveTintColor: osColor,
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
