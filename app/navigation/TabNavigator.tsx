import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";

import ProfileScreen from "../screens/ProfileScreen";
import LocationsScreen from "../screens/LocationsScreen";
import Navigator from "./Navigator";
import { RootStackParamList } from "../types/RootStackParamList";

export default function TabNavigator({
  route,
}: NativeStackScreenProps<RootStackParamList, "Authenticated">) {
  const Tab = createBottomTabNavigator<RootStackParamList>();
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
        component={Navigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="image" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Locations"
        component={LocationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="compass" color={color} size={size} />
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
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
