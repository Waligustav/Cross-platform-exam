import React, { useState } from "react";
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
import { TextInput } from "react-native-gesture-handler";

export default function LoginScreen({
  navigation,
}: NativeStackScreenProps<RootParams, "Login">) {
  const [userInput, setUserInput] = useState("");
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
    <>
      <TextInput
        style={[styles.input, styles.platform]}
        placeholder="Enter your username"
        onChangeText={(userInput) => setUserInput(userInput)}
        value={userInput}
      />
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
                username: userInput,
                imageUri: "https://pbs.twimg.com/media/COWiKiuWgAALshz.jpg",
              })
            }
          />
          <Text style={styles.text}>
            Currently running on an {currentOs} device
          </Text>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      platform: {
        color: colors.mellowBlue,
        borderColor: colors.mellowBlue,
        marginTop: 50,
      },
    },
    android: {
      platform: {
        color: colors.mellowGreen,
        borderColor: colors.mellowGreen,
        marginTop: 80,
      },
    },
    default: {
      platform: {
        color: colors.mellowYellow,
        borderColor: colors.mellowYellow,
      },
    },
  }),
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  innerContainer: {
    padding: 52,
    marginBottom: -20,
  },
  text: {
    color: colors.white,
    alignSelf: "center",
    fontSize: 10,
  },
  input: {
    position: "absolute",
    zIndex: 2,
    fontSize: 15,
    fontWeight: "bold",
    padding: 5,
    height: 30,
    width: 200,
    borderRadius: 3,
    borderWidth: 1,
    alignSelf: "center",
    backgroundColor: colors.white,
  },
});
