import React from "react";
import { Button } from "react-native";
import { RootStackParamList } from "../types/RootStackParamList";
import { NavigationProp, useNavigation } from "@react-navigation/core";

type Props = {
  locationId: number;
  name: string;
};

const LocationButton = ({ locationId, name }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Button
      title="Read more"
      onPress={() =>
        navigation.navigate("LocationScreen", {
          locationId: locationId,
          name: name,
        })
      }
    ></Button>
  );
};

export default LocationButton;
