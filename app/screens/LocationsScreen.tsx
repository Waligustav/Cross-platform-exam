import React, { useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  Button,
} from "react-native";
import RickAndMortyApi from "../api/RickAndMortyApi";
import LocationDetails from "../components/Location/LocationDetails";
import { Location } from "../types/RickAndMortyTypes";
import colors from "../config/colors";
import useApi from "../hooks/useApi";

type Props = { locationId: number };

export default function LocationsScreen({ locationId }: Props) {
  const {
    data: location,
    loading,
    error,
    request: getLocationById,
  } = useApi<Location>(RickAndMortyApi.getLocationById);

  useEffect(() => {
    getLocationById(locationId);
  }, [locationId]);

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={loading} size="large" />
      {error && (
        <>
          <Text>Woops, this did not go as planned!</Text>
          <Button
            title="Try again"
            onPress={() => getLocationById(locationId)}
          />
        </>
      )}
      {!error && !loading && <LocationDetails location={location!} />}
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconBackground: {
    width: 200,
    height: 200,
    backgroundColor: colors.primary,
    borderColor: colors.dark,
    borderWidth: 3,
    borderRadius: 10,
  },
});
