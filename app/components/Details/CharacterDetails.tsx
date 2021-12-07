import React from "react";
import { StyleSheet, Text, Platform } from "react-native";
import { Character } from "../../types/RickAndMortyTypes";
import Sprite from "../Sprite";
import colors from "../../config/colors";

type Props = { character: Character };

export default function CharacterDetails({ character }: Props) {
  return (
    <>
      <Sprite uri={character.image} />
      <Text style={[styles.platform, styles.characterName]}>
        {character.name}
      </Text>
      <Text style={[styles.platform, styles.characterStatus]}>
        {character.gender} that is currently {character.status}
      </Text>
      <Text style={[styles.platform, styles.characterSpecs]}>
        Species: {character.species}
      </Text>
      <Text style={[styles.platform, styles.characterSpecs]}>
        Comes from: {character.origin?.name}
      </Text>
    </>
  );
}

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
