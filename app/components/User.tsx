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

type Props = {
  username: string;
  imageUri: string;
  defaultSize?: number;
  hasUploadedImage?: boolean;
};

export default function User({
  username,
  imageUri,
  defaultSize,
  hasUploadedImage,
}: Props) {
  const { width } = Dimensions.get("screen");

  const size = width / 2;

  const styles = StyleSheet.create({
    ...Platform.select({
      ios: {
        platform: { color: colors.mellowBlue, borderColor: colors.mellowBlue },
      },
      android: {
        platform: {
          color: colors.mellowGreen,
          borderColor: colors.mellowGreen,
        },
      },
      default: {
        platform: {
          color: colors.mellowYellow,
          borderColor: colors.mellowYellow,
        },
      },
    }),
    container: { alignItems: "center" },
    imageContainer: {
      width: size,
      height: size,
      borderRadius: size / 4,
      borderWidth: hasUploadedImage ? 2 : 0,
      overflow: "hidden",
      marginBottom: 15,
    },
    username: {
      textTransform: "capitalize",
      fontSize: 20,
    },
    anonUser: {
      textTransform: "none",
      fontSize: 20,
    },
    text: {
      fontWeight: "bold",
    },
    hideText: {
      display: "none",
    },
  });

  return (
    <View style={styles.container}>
      <Text
        style={
          hasUploadedImage ? styles.hideText : [styles.text, styles.platform]
        }
      >
        Click to add a profile image
      </Text>
      <View style={[styles.imageContainer, styles.platform]}>
        <Image
          source={{
            uri: imageUri,
            width: size,
            height: size,
          }}
        />
      </View>
      <Text
        style={
          username
            ? [styles.username, styles.platform]
            : [styles.anonUser, styles.platform]
        }
      >
        Hello {username ? username : "Anonymous user"}
      </Text>
    </View>
  );
}
