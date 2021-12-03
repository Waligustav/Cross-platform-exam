import React from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../config/colors";

export default function UploadImageScreen() {
  return (
    <View style={[styles.flex, styles.container]}>
      <View style={[styles.container, styles.iconBackground]}>
        <FontAwesome5 name="camera" size={40} color={colors.dark} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconBackground: {
    width: 200,
    height: 200,
    backgroundColor: colors.primary,
    borderColor: colors.dark,
    borderWidth: 3,
    borderRadius: 10,
  },
});
