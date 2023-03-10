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
    <div className=' indicator card card-compact w-96 bg-base-100 recentReleaseCard'>
      <span className='indicator-item badge badge-primary -left-3.5 top-4'>
        new
      </span>
      <img className=' h-72' src={animeImg} alt={animeId} />
      <div className='card-body'>
        <h2 className='card-title text-base'>{animeTitle}</h2>
        <div className='card-actions justify-left'>
          <Link
            to={`/${animeId}`}
            className='btn btn-sm btn-outline btn-accent'
          >
            Watch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimeRecentRelease;
