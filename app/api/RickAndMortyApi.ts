import axios from 'axios'
import {Character, Location, AllLocations} from '../types/RickAndMortyTypes'

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/'

const getAllCharacters = async() => {
    let amountOfCharacters = [];
    for (let i = 1; i < 827; i++){
        amountOfCharacters.push(i);
    }
    try{
        const response = await axios.get<Character>(`character/${amountOfCharacters}`);
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

const getLocationById = async(locationId: number) => {
    try{
        const response = await axios.get<Location>(`location/${locationId}`);
        return response.data;
    } catch (error){
        throw 'Error fetching location: ' + error;
    }
}

export default {
    getAllCharacters,
    getCharacterById,
    getLocationById,
    getAllLocations
}