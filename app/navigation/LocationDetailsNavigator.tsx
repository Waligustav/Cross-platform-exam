import React from "react";
import Button from "../components/Button";
import { RootParams } from "../types/RootParams";
import { NavigationProp, useNavigation } from "@react-navigation/core";
import { Platform, StyleSheet } from "react-native";
import colors from "../config/colors";

type Props = {
  locationId: number;
  name: string;
};

const LocationDetailsNavigator = ({ locationId, name }: Props) => {
  const navigation = useNavigation<NavigationProp<RootParams>>();
  return (
    <Button
      fontName="question-circle"
      fontColor={styles.platform.color}
      onPress={() =>
        navigation.navigate("LocationDetails", {
          locationId: locationId,
          name: name,
        })
      }
    ></Button>
  );
};

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
});

export default LocationDetailsNavigator;
