import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";

import SettingsScreen from "../screens/SettingsScreen";
import UploadImageScreen from "../screens/UploadImageScreen";
import ImageNavigator from "./ImageNavigator";
import NewPictureButton from "./NewPictureButton";
import { RootLoginParamList } from "./LoginNavigator";

export type RootBottomTabPropTypes = {
  Characters: undefined;
  UploadImage: undefined;
  Profile: { username: string; imageUri: string };
};

export default function TabNavigator({
  route,
}: NativeStackScreenProps<RootLoginParamList, "Authenticated">) {
  const Tab = createBottomTabNavigator<RootBottomTabPropTypes>();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Characters"
        component={ImageNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="image" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="UploadImage"
        component={UploadImageScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewPictureButton
              onPress={() => navigation.navigate("UploadImage")}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={SettingsScreen}
        initialParams={{
          username: route.params.username,
          imageUri: route.params.imageUri,
        }}
      />
    </Tab.Navigator>
  );
}
