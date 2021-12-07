import React from "react";
import {
  Text,
  StyleSheet,
  GestureResponderEvent,
  TouchableHighlight,
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
    | "orange";
};

export default function Button({ onPress, title, type = "primary" }: Props) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.mellowGreen,
      padding: 5,
      borderRadius: 5,
      alignItems: "center",
      borderWidth: 1,
      borderColor: colors.dark,
    },
    text: {
      fontSize: 15,
      textTransform: "uppercase",
      color: colors.white,
      fontWeight: "500",
    },
  });
  return (
    <TouchableHighlight
      underlayColor={colors.brightGreen}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}
