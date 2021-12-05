import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { ListItemSeparator, ListItemDelete } from "..";
import { CharacterListItem } from "..";
import { AllCharacters } from "../../types/AllCharacters";
import RickAndMortyApi from "../../api/RickAndMortyApi";
import useApi from "../../hooks/useApi";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../config/colors";

export default function CharacterList() {
  const {
    data: characters,
    loading,
    error,
    request: getAllCharacters,
  } = useApi<AllCharacters>(RickAndMortyApi.getAllCharacters);

  useEffect(() => {
    getAllCharacters();
  }, []);

  function deleteCharacter(id: number) {
    //setCharacter(character?.filter((c) => c.id != id));
  }

  return (
    <SafeAreaView>
      <FlatList
        data={characters?.results}
        keyExtractor={(nameObject) => nameObject.id.toString()}
        renderItem={({ item }) => (
          <CharacterListItem
            id={item.id}
            name={item.name}
            species={item.species}
            image={item.image}
            renderRightActions={() => (
              <ListItemDelete onPress={() => deleteCharacter(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={loading}
        onRefresh={getAllCharacters}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  container: {
    margin: 10,
  },
  title: {
    fontWeight: "bold",
  },
  text: {
    color: colors.gray,
    textTransform: "capitalize",
    marginLeft: 10,
    fontSize: 16,
  },
});
