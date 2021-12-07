import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView } from "react-native";
import { RootParams } from "../types/RootParams";
import LocationsScreen from "./LocationsScreen";

export const LocationDetailsScreen = ({
  route,
}: NativeStackScreenProps<RootParams, "LocationDetails">) => {
  return (
    <SafeAreaView>
      <LocationsScreen locationId={route.params.locationId} />
    </SafeAreaView>
  );
};
