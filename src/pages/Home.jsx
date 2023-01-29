import React, { useContext } from "react";
import { AnimeSearch, Animes, AnimeSearchResults } from "../components";
import AnimeContext from "../context/AnimeContext";
const Home = () => {
  const { animes, dispatch } = useContext(AnimeContext);

  return (
    <div>
      <AnimeSearch />
      {animes.length !== 0 && (
        <button
          className='btn mt-5'
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          clear
        </button>
      )}
      {animes.length !== 0 ? (
        <div className="gap-5 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-center  grid">
          { animes.map((anime) => <AnimeSearchResults key={anime.id} anime={anime} />)}
        </div>
       
      ) : (
        <Animes />
      )}
    </div>
  );
};

export default Home;
