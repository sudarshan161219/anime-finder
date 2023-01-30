import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AnimeContext from "../../context/AnimeContext";
import Loading from "../layouts/Loading";

const AnimeSearchResults = ({ anime }) => {
  const { animeId, releasedDate, animeTitle, animeImg, episodeUrl } = anime;
  const { loading } = useContext(AnimeContext);

    return (
    <Link to={`/${animeId}`} className='card card-compact w-96 glass'>
      <figure>
        <img src={animeImg} alt={animeId} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{animeTitle}</h2>
      </div>
    </Link >
  )


};

export default AnimeSearchResults;
