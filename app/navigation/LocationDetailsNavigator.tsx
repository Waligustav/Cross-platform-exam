import React from "react";
import { Button } from "react-native";
import { RootParams } from "../types/RootParams";
import { NavigationProp, useNavigation } from "@react-navigation/core";

type Props = {
  locationId: number;
  name: string;
};

const LocationDetailsNavigator = ({ locationId, name }: Props) => {
  const navigation = useNavigation<NavigationProp<RootParams>>();
  return (
    <Button
      title="Read more"
      onPress={() =>
        navigation.navigate("LocationDetails", {
          locationId: locationId,
          name: name,
        })
      }
    ></Button>
  );
};

export default LocationDetailsNavigator;
