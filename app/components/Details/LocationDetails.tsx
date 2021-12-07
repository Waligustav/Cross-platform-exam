import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import colors from "../../config/colors";
import { Location } from "../../types/RickAndMortyTypes";

type Props = { location: Location };

export default function LocationDetails({ location }: Props) {
  return (
    <>
      <Text style={[styles.name, styles.platform]}>
        Location: {location.name}
      </Text>
      <Text style={[styles.item, styles.platform]}>Type: {location.type}</Text>
      <Text style={[styles.item, styles.platform]}>
        Dimension: {location.dimension}
      </Text>
      <Text style={[styles.item, styles.platform]}>
        Habitants: {location.residents?.length}
      </Text>
    </>
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
  id: { marginBottom: 10 },
  item: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  name: {
    fontSize: 20,
    textTransform: "capitalize",
    marginBottom: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
});
