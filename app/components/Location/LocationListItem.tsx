import { NavigationProp, useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import LocationDetailsNavigator from "../../navigation/LocationDetailsNavigator";
import { RootParams } from "../../types/RootParams";

type Props = {
  id: number;
  name: string;
  type?: string;
  dimension?: string;
};

export default function LocationListItem({ id, name, type, dimension }: Props) {
  const navigation = useNavigation<NavigationProp<RootParams>>();
  return (
    <View style={[styles.row, styles.container]}>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={[styles.text, styles.title]}>{name} </Text>
        <Text style={styles.text}>{dimension}</Text>
      </View>
      <View style={styles.button}>
        <LocationDetailsNavigator locationId={id} name={name} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row" },
  container: { margin: 10 },
  title: { fontWeight: "600" },
  text: {
    color: colors.loginScreenBg,
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
