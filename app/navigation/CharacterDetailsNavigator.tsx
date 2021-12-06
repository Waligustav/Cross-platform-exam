import { NavigationProp, useNavigation } from "@react-navigation/core";
import React from "react";
import { Button } from "react-native";
import { RootParams } from "../types/RootParams";

type Props = {
  characterId: number;
  name: string;
};

const CharacterDetailsNavigator = ({ characterId, name }: Props) => {
  const navigation = useNavigation<NavigationProp<RootParams>>();
  return (
    <Button
      //Todo - ikon istället ( ==> ikon)
      title="Read more"
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
