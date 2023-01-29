import React from "react";
import { Link } from "react-router-dom";

const AnimeRecentRelease = ({ anime }) => {
  const {
    animeId,
    episodeId,
    animeTitle,
    episodeNum,
    subOrDub,
    animeImg,
    episodeUrl,
  } = anime;

  return (
    <Link
      to={`/${animeId}`}
      className='  card card-compact  bg-base-100 shadow-xl image-full'
    >
      <img className='card-img' src={animeImg} alt={animeId} />
      <div className='card-body  randp   justify-between'>
        <h2 className='card-title text-gray-50'>{animeTitle}</h2>
        <div className="grid gap-1">
          <div className='text-base font-medium badge badge-primary'>episodes: {episodeNum}</div>
          <div className='text-base font-medium badge badge-secondary'>sub or dub: {subOrDub}</div>
        </div>
      </div>
    </Link>
  );
};

export default AnimeRecentRelease;
