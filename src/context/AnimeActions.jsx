import axios from "axios";


const ANIME_URL = import.meta.env.VITE_ANIME_URL;
const ANIME_DETAILS = import.meta.env.VITE_ANIME_DETAILS;


const animeUrl = axios.create({
    baseURL:ANIME_URL,  
})

const animeDetaiUrl = axios.create({
    baseURL:ANIME_DETAILS
})

// Get Search Results
export const SearchResult = async(searchText) => {
    const response = await  animeDetaiUrl.get(`/search?keyw=${searchText}`);
    return response.data
}

// Get All 
export const AllResult = async() => {
    const response = await  animeUrl.get(`/anime`);
    return response.data.data
}


// Get Recent and popular
export const getRecentAndPopular = async () => {
    const [recent, popular, movie] = await Promise.all([
        animeDetaiUrl.get(`/recent-release`),
        animeDetaiUrl.get(`/popular`),
        animeDetaiUrl.get(`/anime-movies`)
    ])

    return {popular: popular.data, recentRelease: recent.data, movies: movie.data }
}



// Get Single 
export const SingleResult = async (searchText) => {
    const response = await animeDetaiUrl.get(`/search?keyw=${searchText}`);
    return response.data.data
}

// Get Single Anime Detail
export const SingleAnimeDetail = async (text) => {
    const response = await animeDetaiUrl.get(`/anime-details/${text}`);
    return response.data
}
