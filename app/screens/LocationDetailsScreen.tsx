import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView } from "react-native";
import { RootStackParamList } from "../types/RootStackParamList";
import LocationsScreen from "./LocationsScreen";

export const LocationDetailsScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, "LocationDetails">) => {
  return (
    <SafeAreaView>
      <LocationsScreen locationId={route.params.locationId} />
    </SafeAreaView>
  );
};
