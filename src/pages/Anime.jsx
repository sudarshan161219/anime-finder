import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AnimeContext from "../context/AnimeContext";
import { SingleResult } from "../context/AnimeActions";
import Loading from "../components/layouts/Loading";

const Anime = () => {
  const params = useParams();
  const { anime, loading, dispatch } = useContext(AnimeContext);

  useEffect(() => {
    getAnime();
  }, []);

  const getAnime = async () => {
    const anime = await SingleResult(params.id);
    dispatch(
      { type: "GET_SINGLE_ANIME", 
      payload: anime
      }
      );
  };

  const { title_english,title_japanese, images} = anime

  if (loading) {
    return (
      <div className=' grid grid-cols-1 '>
        <div className='mb-10'>
          <Link to='/' className='btn  btn-ghost  bg-gray-700 text-sm'>
            back to home
          </Link>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='card p-5 shadow-lg  bg-base-100'>
            <figure>
              <img src={images.jpg.image_url} alt="hello" />
            </figure>
            <div className=' grid justify-center text-center'>
              <h2 className='card-title text-center'>{ title_english} </h2>
              <p>{title_japanese}</p>
            </div>
          </div>

          <div>

          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Anime;
