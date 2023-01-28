import React, { useContext, useEffect } from "react";
import Loading from "../layouts/Loading";
import AnimeContext from "../../context/AnimeContext";
import AnimePopular from "./AnimePopular";
import AnimeRecentRelease from "./AnimeRecentRelease";
import { AllResult, getRecentAndPopular } from "../../context/AnimeActions";
const Animes = ({}) => {
  const { popularandrecentRelease, animes, loading, dispatch } =
    useContext(AnimeContext);

  useEffect(() => {
    getAnime();
  }, []);

  const getAnime = async () => {
    const recentAndPopular = await getRecentAndPopular();
    dispatch({ type: "GET_RECENT_AND_POPULAR", payload: recentAndPopular });
  };

  const { recentRelease, popular } = popularandrecentRelease;

  if (!loading) {
    return (
      <div className='grid mt-10 '>
        <h1 className='badge badge-accent badge-outline badge-lg text-lg font-medium'>
          Recent Release
        </h1>
        <div className='carousel rounded-box'>
          <div className=' xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 carousel-item'>
            {recentRelease
              .map((anime, indx) =>
                indx < 5 ? (
                  <AnimeRecentRelease key={indx} anime={anime} />
                ) : null
              )
              .filter((x) => x)}
          </div>
        </div>

        <h1 className='badge badge-accent badge-outline badge-lg text-lg font-medium'>
          Popular
        </h1>
        <div className='carousel rounded-box'>
          <div className=' xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 carousel-item'>
            {popular
              .map((anime, indx) =>
                indx < 10 ? <AnimePopular key={indx} anime={anime} /> : null
              )
              .filter((x) => x)}
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Animes;
