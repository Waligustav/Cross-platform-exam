import React from "react";
import { StyleSheet, Text } from "react-native";
import { Character } from "../../types/RickAndMortyTypes";
import Sprite from "../Sprite";
import colors from "../../config/colors";

type Props = { character: Character };

export default function CharacterDetails({ character }: Props) {
  return (
    <>
      <Sprite uri={character.image} />
      <Text style={[styles.text, styles.characterName]}>{character.name}</Text>
      <Text style={[styles.text, styles.characterStatus]}>
        {character.gender} that is currently {character.status}
      </Text>
      <Text style={[styles.text, styles.characterSpecs]}>
        Species: {character.species}
      </Text>
      <Text style={[styles.text, styles.characterSpecs]}>
        Comes from: {character.origin?.name}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  text: { color: colors.gray },
  characterId: { marginBottom: 20 },
  characterName: { fontSize: 24, textTransform: "capitalize", marginBottom: 8 },
  characterStatus: {
    fontSize: 18,
    textTransform: "lowercase",
    marginBottom: 8,
  },
  characterSpecs: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 8,
  },
});
