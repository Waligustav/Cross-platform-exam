export type Character = {
  id: number;
  name: string;
  species?: string;
  origin?: {
    name: string;
    url: string;
  };
  image: string;
  };
  
  export type Location = {
    id: number;
    name: string;
  };
  
  export type Episode = {
    id: number;
    name: string;
  };