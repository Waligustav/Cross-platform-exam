import React from "react";
import {
  Text,
  StyleSheet,
  GestureResponderEvent,
  TouchableHighlight,
  Platform,
} from "react-native";

import colors from "../config/colors";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  type?:
    | "primary"
    | "secondary"
    | "light"
    | "danger"
    | "mellowYellow"
    | "greenBg"
    | "mellowGreen"
    | "brightGreen"
    | "mellowBlue"
    | "orange";
};

export default function Button({ onPress, title, type = "primary" }: Props) {
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
    button: {
      padding: 5,
      borderRadius: 5,
      alignItems: "center",
      borderWidth: 1,
      backgroundColor: colors.white,
    },
    text: {
      fontSize: 15,
      textTransform: "uppercase",
      color: colors.white,
      fontWeight: "bold",
    },
  });
  return (
    <TouchableHighlight
      underlayColor={colors.white}
      style={[styles.button, styles.platform]}
      onPress={onPress}
    >
      <Text style={[styles.text, styles.platform]}>{title}</Text>
    </TouchableHighlight>
  );
}
