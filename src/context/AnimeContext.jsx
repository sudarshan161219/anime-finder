import { createContext, useReducer } from "react";
import AnimeReducer from "./AnimeReducer";

const AnimeContext = createContext();

export const AnimeProvider = ({ children }) => {
  const initialSate = {
    searchedAnimes: [],
    animeDetails:[],
    popularandrecentReleaseAndAiring:[],
    localAnime: [],
    loading: true,
  };


  const [state, dispatch] = useReducer(AnimeReducer, initialSate);

if(initialSate.localAnime.length !== 0){
  console.log(initialSate.localAnime)
}


// convert array to JSON string using JSON.stringify()
const jsonArray = JSON.stringify(initialSate.localAnime);

// save to localStorage using "array" as the key and jsonArray as the value
localStorage.setItem('array', jsonArray);

// get the JSON string from localStorage
const str = localStorage.getItem('array');

// convert JSON string to relevant object
const parsedArray = JSON.parse(str);

console.log(parsedArray);


  return (
    <AnimeContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};


export default AnimeContext;