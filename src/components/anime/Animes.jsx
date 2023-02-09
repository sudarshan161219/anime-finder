import React, { useContext, useEffect } from "react";
import Loading from "../layouts/Loading";
import AnimeContext from "../../context/AnimeContext";
import AnimePopular from "./AnimePopular";
import AnimeRecentRelease from "./AnimeRecentRelease";
import AnimeMovies from "./AnimeMovies";
import TopairingAnime from "./TopairingAnime.";
import { getRecentAndPopularAndAiring } from "../../context/AnimeActions";

const Animes = ({}) => {
  const { popularandrecentReleaseAndAiring, loading, dispatch } =
    useContext(AnimeContext);

  useEffect(() => {
    const getAnime = async () => {

      const recentAndPopularAndAiring = await getRecentAndPopularAndAiring();

      dispatch({
        type: "GET_RECENT_AND_POPULAR",
        payload: recentAndPopularAndAiring,
      });

      dispatch({
        type: "LOCAL_STORAGE",
        payload: recentAndPopularAndAiring,
      })
    };
    getAnime();
  }, []);



  // const { recentRelease, popular, movies, topAiring } =
  //   popularandrecentReleaseAndAiring;


// convert array to JSON string using JSON.stringify()
const jsonArray = JSON.stringify(popularandrecentReleaseAndAiring);

// save to localStorage using "array" as the key and jsonArray as the value
localStorage.setItem('array', jsonArray);

// get the JSON string from localStorage
const str = localStorage.getItem('array');

// convert JSON string to relevant object
const parsedArray = JSON.parse(str);


const { recentRelease, popular, movies, topAiring } =
parsedArray 



  if (!loading) {
    return (
      <div className='grid mt-12 '>
        {/* recentRelease */}
        <h1 className='badge badge-accent badge-outline badge-lg text-lg font-medium'>
          Recent Release
        </h1>
        <div className=' mt-5 carousel rounded-box py-4'>
          <div className='xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 carousel-item'>
            { recentRelease.map((anime, indx) => (
              <AnimeRecentRelease key={indx} anime={anime} />
            ))}
          </div>
        </div>

        {/*  popular */}
        <h1 className=' mt-10 badge badge-secondary badge-outline badge-lg text-lg font-medium'>
          Popular
        </h1>
        <div className=' mt-5 carousel rounded-box py-4'>
          <div className=' xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 carousel-item'>
            {popular.map((anime, indx) =>
              indx < 10 ? <AnimePopular key={indx} anime={anime} /> : null
            )}
          </div>
        </div>

        {/* Top Airing*/}
        <h1 className=' mt-10 badge badge-secondary badge-outline badge-lg text-lg font-medium'>
          Top Airing
        </h1>
        <div className=' mt-5 carousel rounded-box py-4'>
          <div className=' xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 carousel-item'>
            {topAiring.map((anime, indx) =>
              indx < 10 ? <TopairingAnime key={indx} anime={anime} /> : null
            )}
          </div>
        </div>

        {/* Movies */}
        <h1 className=' mt-10 badge badge-outline badge-lg text-lg font-medium'>
          Movies
        </h1>

        <div className=' mt-5 carousel rounded-box'>
          <div className=' xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 carousel-item'>
            {movies
              .map((anime, indx) =>
                indx < 10 ? <AnimeMovies key={indx} anime={anime} /> : null
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
