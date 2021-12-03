import React from "react";
import { Dimensions, Image } from "react-native";

type Props = { uri: string; size?: number };

export default function Sprite({ uri, size = 200 }: Props) {
  const width = Dimensions.get("window").width;

  return (
    <Image
      source={{
        uri,
        width: size,
        height: size,
      }}
    />
  );
}
