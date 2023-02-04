import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AnimeContext from "../context/AnimeContext";
import { SingleAnimeDetail } from "../context/AnimeActions";
import Loading from "../components/layouts/Loading";
import { BsDot } from "react-icons/bs";
import Player from "../components/anime/AnimePlayer";
const Anime = () => {
  const params = useParams();
  const { loading, dispatch, animeDetails } = useContext(AnimeContext);

  useEffect(() => {
    getAnime();
  }, []);


  const getAnime = async () => {
    const animeDetails = await SingleAnimeDetail(params.id);
    dispatch({
      type: "GET_SINGLE_ANIME_DETAIL",
      payload: animeDetails,
    });
  };

  const {
    animeImg,
    animeTitle,
    type,
    otherNames,
    synopsis,
    releasedDate,
    totalEpisodes,
    status,
    genres,
    episodesList,
  } = animeDetails;



  if (loading) {
    return (
      <div className=' grid grid-cols-1 '>
        <div className='mb-10'>
          <Link
            to='/'
            className='btn  btn-ghost  bg-gray-700 text-sm '
            onClick={() => dispatch({ type: "CLEAR_ANIME_DETAIL" })}
          >
            back to home
          </Link>
        </div>
        {/*  */}
        <div className='grid  grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='card p-5 shadow-lg  bg-base-100'>
            <figure>
              <img className='w-30' src={animeImg} alt='hello' />
            </figure>
            <div className='mt-4 grid justify-center text-center'>
              <h2 className='grid justify-center font-normal text-sm mb-2'>
                {animeTitle}
                <BsDot className='m-0 justify-self-center' />
                {otherNames}
              </h2>
              <p>{type}</p>
            </div>
          </div>

          {/*  */}
          <div className='mt-5 col-span-2'>
            <h3 className=' mb-5 font-normal text-2xl '> {otherNames}</h3>
            <div className='stats stat lg:stats-horizontal shadow'>
              <div className='stat'>
                <div className='stat-title'>episodes</div>
                <div className='stat-value text-base'>{totalEpisodes}</div>
              </div>

              {animeDetails.length !== 0 ? (
                <div className='stat'>
                  <div className='stat-title'>genre</div>
                  {genres.map((genre, indx) => (
                    <div className='stat-value text-sm' key={indx}>
                      {genre}
                    </div>
                  ))}
                </div>
              ) : null}

              <div className='stat'>
                <div className='stat-title'>status</div>
                <div className='stat-value text-base text-secondary'>
                  {status}
                </div>
              </div>

              <div className='stat'>
                <div className='stat-title'>released date</div>
                <div className='stat-value text-base'>{releasedDate}</div>
              </div>

              <div className='stat'>
                <div className='stat-title'>type</div>
                <div className='stat-value text-base'>{type}</div>
              </div>
            </div>

            <p className=' mt-5 lg:mt-1 antialiased tracking-wide leading-relaxed'>
              <span className="text-lg font-medium" >synopsis</span> <br />
              {synopsis}
            </p>

            {animeDetails.length !== 0 ? (
              <div className='m-1'>
                <div className='mt-3 p-3 '>
                  <h1 className='text-lg mb-3 font-medium'>Episodes</h1>
                  {/* <Player img={animeImg} title={params.id} episodeList={episodesList} /> */}
                </div>
       
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Anime;
