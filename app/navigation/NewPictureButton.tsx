import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../config/colors";

type Props = {
  onPress: (event: GestureResponderEvent) => void;
};

export default function NewPictureButton({ onPress }: Props) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <FontAwesome5 name="camera" color={colors.dark} size={40} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: 80,
    height: 80,
    borderRadius: 40,
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.dark,
  },
});
