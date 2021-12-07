import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Platform,
  Text,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Button from "../components/Button";
import { RootParams } from "../types/RootParams";
import colors from "../config/colors";

export default function LoginScreen({
  navigation,
}: NativeStackScreenProps<RootParams, "Login">) {
  const image =
    "https://cutewallpaper.org/21/rick-and-morty-phone-wallpaper/Rick-And-Morty-Rick-Y-Morty-Wallpapers-Iphone-Hd-.jpg";
  let currentOs;
  if (Platform.OS === "ios") {
    currentOs = "ios";
  }
  if (Platform.OS === "android") {
    currentOs = "android";
  }
  return (
    <ImageBackground
      style={styles.image}
      resizeMode="cover"
      source={{ uri: image }}
    >
      <View style={styles.innerContainer}>
        <Button
          title="proceed"
          onPress={() =>
            navigation.navigate("Authenticated", {
              username: "Hitlerina Twerkinson",
              imageUri: "https://pbs.twimg.com/media/COWiKiuWgAALshz.jpg",
            })
          }
        />
        <Text style={styles.text}>
          Currently running on an {currentOs} device
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  innerContainer: {
    padding: "15%",
  },
  text: {
    color: colors.white,
    alignSelf: "center",
    fontSize: 10,
  },
});
