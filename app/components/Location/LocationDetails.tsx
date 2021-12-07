import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../config/colors";
import { Location } from "../../types/RickAndMortyTypes";

type Props = { location: Location };

export default function LocationDetails({ location }: Props) {
  return (
    <>
      <Text style={styles.name}>Location: {location.name}</Text>
      <Text style={styles.item}>Type: {location.type}</Text>
      <Text style={styles.item}>Dimension: {location.dimension}</Text>
      <Text style={styles.item}>Habitants: {location.residents?.length}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  id: { marginBottom: 10 },
  item: {
    color: colors.mellowGreen,
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  name: {
    color: colors.mellowGreen,
    fontSize: 20,
    textTransform: "capitalize",
    marginBottom: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
});
