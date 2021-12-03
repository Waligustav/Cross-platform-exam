export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: { name: string };
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