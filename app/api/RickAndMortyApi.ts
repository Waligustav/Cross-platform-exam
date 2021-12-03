import axios from 'axios'
import {Character, Location, Episode} from '../types/RickAndMortyTypes'
import { AllCharacters } from "../types/AllCharacters";

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/'

const getAllCharacters = async() => {
    try{
        const response = await axios.get<AllCharacters>('character/');
        return response.data;
    } catch (error){
        throw 'Error fetching character: ' + error;
    }
}

const getCharacterById = async(character: number) => {
    try{
        const response = await axios.get<Character>(`character/${character}`);
        return response.data;
    } catch (error){
        throw 'Error fetching character: ' + error;
    }
}

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
        const response = await axios.get<Episode>(`episode${episodeId}`);
        return response.data;
    } catch (error){
        throw 'Error fetching episode: ' + error;
    }
}



export default {
    getAllCharacters,
    getCharacterById,
    getLocationById,
    getEpisodeById
}