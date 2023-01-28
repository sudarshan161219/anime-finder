import React from "react";
import { Link } from "react-router-dom";

const AnimePopular = ({ anime }) => {
  const { animeId, releasedDate, animeTitle, animeImg, episodeUrl } = anime;

  return (
    <Link
      to={`/${animeId}`}
      className='  card card-compact  bg-base-100 shadow-xl image-full'
    >
      <img className='card-img' src={animeImg} alt={animeId} />
      <div className='card-body  justify-between'>
        <h2 className='card-title'>{animeTitle}</h2>
        <div className=' badge-lg text-base badge badge-primary font-medium'>
        released on: {releasedDate}
        </div>
      </div>
    </Link>
  );
};

export default AnimePopular;
