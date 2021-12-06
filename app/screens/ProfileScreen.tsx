import React from "react";
import { StyleSheet, View } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NavigationProp } from "@react-navigation/native";

import Button from "../components/Button";
import User from "../components/User";
import { RootParams } from "../types/RootParams";

export default function ProfileScreen({
  route,
  navigation,
}: BottomTabScreenProps<RootParams, "Profile">) {
  return (
    <View style={styles.container}>
      <User username={route.params.username} imageUri={route.params.imageUri} />
      <Button
        title="Logg ut"
        onPress={() =>
          navigation.getParent<NavigationProp<RootParams>>().navigate("Login")
        }
        type="hitlerinaHair"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    justifyContent: "space-between",
  },
});
