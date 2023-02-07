import React from "react";
import { Link } from "react-router-dom";
const AnimeMovies = ({ anime }) => {
  const { animeId, releasedDate, animeTitle, animeImg, episodeUrl } = anime;

  
      return (

   <Link
      to={`/${animeId}`}
      className='card movie-carousel card-compact w-96 bg-base-100 shadow-xl'
    >
      <img src={animeImg} alt={animeId} />
      <div className='card-body movie-card'>
        <div className='badge badge-secondary'>{releasedDate}</div>
        <h2 className=' text-sm card-title'>{animeTitle}</h2>
      </div>
    </Link>
  )
  



};

export default AnimeMovies;
