import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Platform,
} from "react-native";

import colors from "../config/colors";

type Props = { username: string; imageUri: string };

export default function User({ username, imageUri }: Props) {
  const { width } = Dimensions.get("screen");

  const size = width / 2;

  const styles = StyleSheet.create({
    ...Platform.select({
      ios: {
        platform: { color: colors.mellowBlue },
      },
      android: {
        platform: { color: colors.mellowGreen },
      },
      default: {
        platform: { color: colors.mellowYellow },
      },
    }),
    container: { alignItems: "center" },
    imageContainer: {
      width: size,
      height: size,
      borderRadius: size / 4,
      borderWidth: 2,
      borderColor: colors.dark,
      overflow: "hidden",
      marginBottom: 15,
    },
    username: {
      textTransform: "capitalize",
      fontSize: 20,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUri, width: size, height: size }} />
      </View>
      <Text style={[styles.username, styles.platform]}>{username}</Text>
    </View>
  );
}
