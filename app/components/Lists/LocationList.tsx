import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import RickAndMortyApi from "../../api/RickAndMortyApi";
import useApi from "../../hooks/useApi";
import { AllLocations } from "../../types/RickAndMortyTypes";
import { ListItemSeparator } from "..";
import LocationListItem from "../ListItems/LocationListItem";

export default function LocationList() {
  const {
    data: locations,
    loading,
    error,
    request: getAllLocations,
  } = useApi<AllLocations>(RickAndMortyApi.getAllLocations);

  useEffect(() => {
    getAllLocations();
  }, []);

  return (
    <>
      <FlatList
        data={locations?.results}
        keyExtractor={(nameobject) => nameobject.id.toString()}
        renderItem={({ item }) => (
          <LocationListItem
            id={item.id}
            name={item.name}
            type={item.type}
            dimension={item.dimension}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={loading}
        onRefresh={getAllLocations}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
