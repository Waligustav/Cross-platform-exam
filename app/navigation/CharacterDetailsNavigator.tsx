import { NavigationProp, useNavigation } from "@react-navigation/core";
import React from "react";
import { Button } from "react-native";
import { RootStackParamList } from "../types/RootStackParamList";

type Props = {
  characterId: number;
  name: string;
};

const CharacterButton = ({ characterId, name }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
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

export default CharacterButton;
