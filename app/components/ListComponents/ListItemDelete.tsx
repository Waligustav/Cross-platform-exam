import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from "react-native";
import colors from "../../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  onPress?: (event: GestureResponderEvent) => void;
};

export default function ListItemDelete({ onPress }: Props) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.separator}>
        <MaterialCommunityIcons
          name="pokeball"
          color={colors.white}
          size={30}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  separator: {
    width: 70,
    backgroundColor: colors.danger,
    justifyContent: "center",
    alignItems: "center",
  },
});
