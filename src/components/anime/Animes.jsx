import React, { useContext, useEffect } from "react";
import Loading from "../layouts/Loading";
import AnimeContext from "../../context/AnimeContext";
import AnimeItem from "./AnimeItem";
import { AllResult } from "../../context/AnimeActions";
const Animes = ({}) => {
  const { animes, loading, dispatch } = useContext(AnimeContext);

  useEffect(() => {
    getAnime();
  }, []);

  const getAnime = async () => {
    const animes = await AllResult();
    dispatch({ type: "GET_ANIME", payload: animes });
    // dispatch({type:'CLEAR_ANIME_DETAIL'})
  };

  if (!loading) {
    return (
      <div className=' mt-10 grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {animes.map((anime, indx) => (
          <AnimeItem key={indx} anime={anime} />
        ))}
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Animes;
