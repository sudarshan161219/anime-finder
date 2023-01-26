import axios from "axios";


const ANIME_URL = import.meta.env.VITE_ANIME_URL;


const animeUrl = axios.create({
    baseURL:ANIME_URL,
})

// Get Search Results
export const SearchResult = async(searchText) => {
    const params = new URLSearchParams({
        q: searchText
    })

    const response = await  animeUrl.get(`/anime?${params}&nsfw`);
    return response.data.data
}

// Get All 
export const AllResult = async() => {
    const response = await  animeUrl.get(`/anime`);
    return response.data.data
}


// Get Single 
export const SingleResult = async (searchText) => {
    const response = await animeUrl.get(`/anime/${searchText}`);
    return response.data.data
}