import { createContext, useReducer } from "react";
import AnimeReducer from "./AnimeReducer";

const AnimeContext = createContext();

export const AnimeProvider = ({ children }) => {
  const initialSate = {
    searchedAnimes: [],
    animeDetails:[],
    popularandrecentReleaseAndAiring:[],
    walls: [],
    loading: true,
  };


  const [state, dispatch] = useReducer(AnimeReducer, initialSate);



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