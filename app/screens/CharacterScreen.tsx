import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RickAndMortyApi from "../api/RickAndMortyApi";
import { Character } from "../types/RickAndMortyTypes";
import CharacterDetails from "../components/Details/CharacterDetails";
import colors from "../config/colors";
import useApi from "../hooks/useApi";

type Props = { characterId: number };

export default function CharacterScreen({ characterId }: Props) {
  const {
    data: character,
    loading,
    error,
    request: getCharacterById,
  } = useApi<Character>(RickAndMortyApi.getCharacterById);

  useEffect(() => {
    getCharacterById(characterId);
  }, [characterId]);

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={loading} size="large" color="#4b4b4d" />
      {error && (
        <>
          <Text>Woops, this did not go as planned!</Text>
          <Button
            title="Try again"
            onPress={() => getCharacterById(characterId)}
          />
        </>
      )}
      {!error && !loading && <CharacterDetails character={character!} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  text: { color: colors.gray },
  characterId: { marginBottom: 20 },
  characterName: { fontSize: 24, textTransform: "capitalize", marginBottom: 8 },
});
