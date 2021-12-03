import React from "react";
import { StyleSheet, Text } from "react-native";
import { Character } from "../../types/RickAndMortyTypes";
import Sprite from "../Sprite";
import colors from "../../config/colors";

type Props = { character: Character };

export default function ItemContainer({ character }: Props) {
  return (
    <>
      <Text style={[styles.text, styles.characterId]}>{character.id}</Text>
      <Sprite uri={character.image} />
      <Text style={[styles.text, styles.characterName]}>{character.name}</Text>
      <Text style={[styles.text, styles.characterStatus]}>
        {character.gender} that is currently {character.status}
      </Text>
      <Text style={[styles.text, styles.characterSpecies]}>
        Species: {character.species}
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
  characterSpecies: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 8,
  },
});
