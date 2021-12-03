import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Button from "../components/Button";
import { RootLoginParamList } from "../navigation/LoginNavigator";

export default function LoginScreen({
  navigation,
}: NativeStackScreenProps<RootLoginParamList, "Login">) {
  const image =
    "https://cutewallpaper.org/21/rick-and-morty-phone-wallpaper/Rick-And-Morty-Rick-Y-Morty-Wallpapers-Iphone-Hd-.jpg";
  return (
    <ImageBackground
      style={styles.image}
      resizeMode="cover"
      source={{ uri: image }}
    >
      <View style={styles.innerContainer}>
        <Button
          title="Login"
          onPress={() =>
            navigation.navigate("Authenticated", {
              username: "Hitlerina Twerkinson",
              imageUri: "https://pbs.twimg.com/media/COWiKiuWgAALshz.jpg",
            })
          }
          type="rickHairColor"
        />
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
    padding: "20%",
  },
});
