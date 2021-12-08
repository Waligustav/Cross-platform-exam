import { NavigationProp, useNavigation } from "@react-navigation/core";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import Button from "../components/Button";
import { RootParams } from "../types/RootParams";
import colors from "../config/colors";

type Props = {
  characterId: number;
  name: string;
};

const CharacterDetailsNavigator = ({ characterId, name }: Props) => {
  const navigation = useNavigation<NavigationProp<RootParams>>();
  return (
    <Button
      fontName="info-circle"
      fontColor={styles.platform.color}
      onPress={() =>
        navigation.navigate("CharacterDetails", {
          characterId: characterId,
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

export default CharacterDetailsNavigator;
