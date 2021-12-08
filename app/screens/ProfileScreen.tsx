import React, { useState } from "react";
import { Linking, StyleSheet, View } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NavigationProp } from "@react-navigation/native";

import Button from "../components/Button";
import User from "../components/User";
import { RootParams } from "../types/RootParams";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ProfileScreen({
  route,
  navigation,
}: BottomTabScreenProps<RootParams, "Profile">) {
  const [imageUri, setImageUri] = useState<string>();

  async function getPermission(): Promise<boolean> {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (granted) return true;
    Linking.openSettings();
    return false;
  }

  async function pickImage() {
    const granted = await getPermission();
    if (!granted) {
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        {imageUri ? (
          <User
            username={route.params.username}
            imageUri={imageUri}
            hasUploadedImage={true}
          />
        ) : (
          <User
            username={route.params.username}
            imageUri={route.params.imageUri}
            defaultSize={100}
          />
        )}
      </TouchableOpacity>
      <Button
        title="Logg ut"
        onPress={() =>
          navigation.getParent<NavigationProp<RootParams>>().navigate("Login")
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    justifyContent: "space-between",
  },
});
