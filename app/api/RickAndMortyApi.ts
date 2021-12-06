import axios from 'axios'
import {Character, Location, Episodes, AllLocations, AllCharacters} from '../types/RickAndMortyTypes'

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/'

const getAllCharacters = async() => {
    try{
        const response = await axios.get<AllCharacters>('character/');
        return response.data;
    } catch (error){
        throw 'Error fetching character: ' + error;
    }
}

const getCharacterById = async(characterId: number) => {
    try{
        const response = await axios.get<Character>(`character/${characterId}`);
        return response.data;
    } catch (error){
        throw 'Error fetching character: ' + error;
    }
}

const getAllLocations = async () => {
    try {
      const response = await axios.get<AllLocations>("location/");
      return response.data;
    } catch (error) {
      throw "Feil ved henting av: " + error;
    }
  };

//Todo - get all or getById?
const getLocationById = async(locationId: number) => {
    try{
        const response = await axios.get<Location>(`location/${locationId}`);
        return response.data;
    } catch (error){
        throw 'Error fetching location: ' + error;
    }
}

//Todo - get all or getById?
const getEpisodeById = async(episodeId: number) => {
    try{
        const response = await axios.get<Episodes>(`episode${episodeId}`);
        return response.data;
    } catch (error){
        throw 'Error fetching episode: ' + error;
    }
}



export default {
    getAllCharacters,
    getCharacterById,
    getLocationById,
    getEpisodeById,
    getAllLocations
}