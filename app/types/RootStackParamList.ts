export type RootStackParamList = {
  CharacterList: undefined;
  CharacterDetails: { characterId: number; name?: string };
  Locations: undefined;
  LocationScreen: { locationId: number; name?: string; locationUrl?: string };
  LocationList: undefined;
  LocationDetails: { locationId: number; name?: string; locationUrl?: string };
  Image: { uri: string };
  Characters: undefined;
  Profile: { username: string; imageUri: string };
  Login: undefined;
  Authenticated: { username: string; imageUri: string };
};
