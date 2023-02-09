import axios from "axios";

const ANIME_URL = import.meta.env.VITE_ANIME_URL;
const ANIME_DETAILS = import.meta.env.VITE_ANIME_DETAILS;
const ANIME_WALLS = import.meta.env.VITE_ANIME_WALLS;

const animeDetaiUrl = axios.create({
  baseURL: ANIME_DETAILS,
});

const animeWalls = axios.create({
  baseURL: ANIME_WALLS,
});

// Get Search Results
export const SearchResult = async (searchText) => {
  const response = await animeDetaiUrl.get(`/search?keyw=${searchText}`);
  return response.data;
};

// Get All
export const AllResult = async () => {
  const response = await animeUrl.get(`/anime`);
  return response.data.data;
};

// Get Recent and popular
export const getRecentAndPopularAndAiring = async () => {
  const [recent, popular, movie, toairing] = await Promise.all([
    animeDetaiUrl.get("/recent-release"),
    animeDetaiUrl.get("/popular"),
    animeDetaiUrl.get("/anime-movies?page=2"),
    animeDetaiUrl.get("/top-airing"),
  ]);

  return {
    popular: popular.data,
    recentRelease: recent.data,
    movies: movie.data,
    topAiring: toairing.data,
  };
};

// Get Single
export const SingleResult = async (searchText) => {
  const response = await animeDetaiUrl.get(`/search?keyw=${searchText}`);
  return response.data.data;
};

// Get Single Anime Detail
export const SingleAnimeDetail = async (text) => {
  const response = await animeDetaiUrl.get(`/anime-details/${text}`);
  return response.data;
};

export const getWalls = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ccd9373daemsh7061f859180eaa5p146e05jsn84328b527c57",
      "X-RapidAPI-Host":
        "premium-anime-mobile-wallpapers-illustrations.p.rapidapi.com",
    },
  };

  const response = await animeWalls.get(
    `/anime?page=1&sensitivity=1&quality=1` , options
  );
  return response.data;

};
