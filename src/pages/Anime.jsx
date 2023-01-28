import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AnimeContext from "../context/AnimeContext";
import { SingleResult, SingleAnimeDetail } from "../context/AnimeActions";
import Loading from "../components/layouts/Loading";
import { BsDot } from "react-icons/bs";

const Anime = () => {
  const params = useParams();
  const { anime, loading, dispatch, animeDetails } = useContext(AnimeContext);

  useEffect(() => {
    getAnime();
  }, []);

  function hasWhiteSpace(s) {
    return /\s/.test(s);
  }



  const getAnime = async () => {
    const anime = await SingleResult(params.id);
    const animeDetails = await SingleAnimeDetail(
      anime.title.replace(/\s+/g, "-")
    );
    dispatch({ type: "GET_SINGLE_ANIME", payload: anime });

    dispatch({
      type: "GET_SINGLE_ANIME_DETAIL",
      payload: animeDetails,
    });
  };

  const { title_english, title_japanese, title, episodes, status, score } =
    anime;
  const { animeImg, type, otherNames, synopsis, releasedDate } = animeDetails;

  if (loading) {
    return (
      <div className=' grid grid-cols-1 '>
        <div className='mb-10'>
          <Link to='/' className='btn  btn-ghost  bg-gray-700 text-sm'>
            back to home
          </Link>
        </div>
        <div className='grid  grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='card p-5 shadow-lg  bg-base-100'>
            <figure>
              <img className='w-30' src={animeImg} alt='hello' />
            </figure>
            <div className='mt-4 grid justify-center text-center'>
              <h2 className='grid justify-center font-normal text-sm mb-2'>
                {title_english === null ? title : title_english}
                <BsDot className='m-0' />
                {title_japanese}
              </h2>
              <p>{type}</p>
            </div>
          </div>

          <div className='mt-5 col-span-2'>
            <h3 className=' mb-5 font-normal text-2xl '> {otherNames}</h3>
            <div className='stats stat lg:stats-horizontal shadow'>
              <div className='stat'>
                <div className='stat-title'>episodes</div>
                <div className='stat-value'>{episodes}</div>
              </div>

              <div className='stat'>
                <div className='stat-title'>status</div>
                <div className='stat-value text-secondary'>{status}</div>
              </div>

              <div className='stat'>
                <div className='stat-title'>released date</div>
                <div className='stat-value'>{releasedDate}</div>
              </div>

              <div className='stat'>
                <div className='stat-title'>score</div>
                <div className='stat-value'>{score}</div>
              </div>
            </div>

            <p className=' mt-5 lg:mt-1 antialiased tracking-wide leading-relaxed'>
              {synopsis}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Anime;
