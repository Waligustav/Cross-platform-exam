import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import LocationDetailsNavigator from "../../navigation/LocationDetailsNavigator";

type Props = {
  id: number;
  name: string;
  type?: string;
  dimension?: string;
};

export default function LocationListItem({ id, name, dimension }: Props) {
  return (
    <View style={[styles.row, styles.container]}>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={[styles.text, styles.title, styles.platform]}>{name}</Text>
        <Text style={[styles.text, styles.platform]}>{dimension}</Text>
      </View>
      <View style={styles.button}>
        <LocationDetailsNavigator locationId={id} name={name} />
      </View>
    </View>
  );
}

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
  row: { flexDirection: "row" },
  container: { margin: 10 },
  title: { fontWeight: "bold" },
  text: {
    textTransform: "capitalize",
    marginLeft: 10,
    fontSize: 16,
    height: 25,
  },
  button: {
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
});
