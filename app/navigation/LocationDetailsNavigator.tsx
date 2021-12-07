import React from "react";
import Button from "../components/Button";
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
      title="More info"
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
