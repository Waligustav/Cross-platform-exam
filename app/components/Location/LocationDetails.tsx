import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../config/colors";
import { Location } from "../../types/RickAndMortyTypes";

type Props = { location: Location };

export default function LocationDetails({ location }: Props) {
  return (
    <>
      <Text style={styles.name}>Name: {location.name}</Text>
      <Text style={styles.item}>Type: {location.type}</Text>
      <Text style={styles.item}>
        Type: {location.type} lives in the following dimension:{" "}
        {location.dimension}
      </Text>
      <Text style={styles.item}>Habitants:</Text>
    </>
  );
}

const styles = StyleSheet.create({
  text: { color: colors.gray },
  id: { marginBottom: 10 },
  item: {
    color: colors.loginScreenBg,
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  name: {
    fontSize: 20,
    textTransform: "capitalize",
    marginBottom: 8,
    textAlign: "center",
  },
});
