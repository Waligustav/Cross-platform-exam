export type RootParams = {
    Characters: undefined;
    CharacterList: undefined;
    CharacterDetails: { characterId: number; name?: string };
    
    Locations: undefined;
    LocationList: undefined;
    LocationDetails: { locationId: number; name?: string; locationUrl?: string };

    Login: undefined;
    Authenticated: { username: string; imageUri: string };

    Profile: { username: string; imageUri: string };
  };
  