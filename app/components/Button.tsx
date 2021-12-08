import React from "react";
import {
  Text,
  StyleSheet,
  GestureResponderEvent,
  TouchableHighlight,
  Platform,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  title?: string;
  fontName?: string;
  fontColor?: string;
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

export default function Button({ onPress, title, fontName, fontColor }: Props) {
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
      <Text style={[styles.text, styles.platform]}>
        <FontAwesome5 name={fontName} color={fontColor} size={25} />
        {title}
      </Text>
    </TouchableHighlight>
  );
}
