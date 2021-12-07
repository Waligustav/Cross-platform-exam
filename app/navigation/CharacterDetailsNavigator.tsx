import { NavigationProp, useNavigation } from "@react-navigation/core";
import React from "react";
import Button from "../components/Button";
import { RootParams } from "../types/RootParams";

type Props = {
  characterId: number;
  name: string;
};

const CharacterDetailsNavigator = ({ characterId, name }: Props) => {
  const navigation = useNavigation<NavigationProp<RootParams>>();
  return (
    <Button
      title="More info"
      onPress={() =>
        navigation.navigate("CharacterDetails", {
          characterId: characterId,
          name: name,
        })
      }
    ></Button>
  );
};

export default CharacterDetailsNavigator;
