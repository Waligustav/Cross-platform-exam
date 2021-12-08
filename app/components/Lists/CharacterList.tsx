import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { ListItemSeparator, CharacterListItem } from "..";
import { Character } from "../../types/RickAndMortyTypes";
import RickAndMortyApi from "../../api/RickAndMortyApi";
import useApi from "../../hooks/useApi";
import colors from "../../config/colors";
import SearchBar from "react-native-platform-searchbar";

export default function CharacterList() {
  const [search, setSearch] = useState<string>("");

  const {
    data: characters,
    filteredData: filteredCharacters,
    setFilteredData: setFilteredCharacters,
    loading,
    error,
    request: getAllCharacters,
  } = useApi<Character>(RickAndMortyApi.getAllCharacters);

  useEffect(() => {
    getAllCharacters();
  }, []);

  function deleteCharacter(id: number) {
    //setCharacter(character?.filter((c) => c.id != id));
  }

  const filterData: (text: string) => void = async (text: string) => {
    if (text) {
      const filteredData = await characters.filter((item: any) => {
        const itemData = item.name ? item.name.toLowerCase() : "";
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredCharacters(await filteredData);
      setSearch(text);
    } else {
      setFilteredCharacters(await characters);
      setSearch(text);
    }
  };

  return (
    <>
      <SearchBar
        theme="light"
        onChangeText={(text) => filterData(text)}
        onClear={() => filterData("")}
        placeholder="Search for a character"
        value={search}
      >
        {loading ? (
          <ActivityIndicator style={{ marginRight: 10 }} />
        ) : undefined}
      </SearchBar>
      <FlatList
        data={filteredCharacters}
        keyExtractor={(nameObject) => nameObject.id.toString()}
        renderItem={({ item }) => (
          <CharacterListItem
            id={item.id}
            name={item.name}
            species={item.species}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={loading}
        onRefresh={getAllCharacters}
      />
    </>
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
