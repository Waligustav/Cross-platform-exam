import React from "react";
import { Image } from "react-native";

type Props = { uri: string; size?: number };

export default function Sprite({ uri, size = 200 }: Props) {
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
