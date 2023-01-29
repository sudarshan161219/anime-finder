import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AnimeContext from "../../context/AnimeContext";

const AnimeSearchResults = ({anime}) => {

    const { animeId, releasedDate, animeTitle, animeImg, episodeUrl } = anime;

  return (

      <Link className='card card-compact w-96 bg-base-100 shadow-xl'>
        <figure>
          <img
            src={animeImg}
            alt={animeId}
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{animeTitle}</h2>
        </div>
      </Link>
  );
};

export default AnimeSearchResults;
