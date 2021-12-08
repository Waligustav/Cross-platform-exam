export type Character = {
  id: number;
  name: string;
  species?: string;
  gender: string;
  status: string;
  origin?: {
    name: string;
    url: string;
  };
  image: string;
  };

  export type AllCharacters = {
    info: {
      next: string | null;
      prev: string | null;
    };
    results: [
      {
        id: number;
        name: string;
        species?: string;
        origin?: {
          name: string;
          url: string;
        };
        image: string;
      }
    ];
  };
  
  export type Location = {
    id: number;
    name: string;
    type?: string;
    dimension?: string;
    residents: string[];
  };
  
  export type AllLocations = {
    info: {
      pages: number;
    };
    results: [
      {
        id: number;
        name: string;
        type: string;
        dimension: string;
        residents: string[];
      }
    ];
  };
  