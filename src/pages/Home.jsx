import React, { useContext } from "react";
import { AnimeSearch, Animes, AnimeSearchResults } from "../components";
import AnimeContext from "../context/AnimeContext";
const Home = () => {
  const { searchedAnimes, dispatch } = useContext(AnimeContext);


  return (
    <div>
      <AnimeSearch />
      {searchedAnimes.length !== 0 ? (
        <>
   <button
          className='btn mt-10 mb-10'
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          clear
        </button>
          <div className='gap-5 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2   justify-center  grid'>
            {searchedAnimes.map((anime) => (
              <AnimeSearchResults key={anime.animeId} anime={anime} />
            ))}
          </div>
        </>
      ) : (
        <Animes />
      )}
    </div>
  );
};

export default Home;
