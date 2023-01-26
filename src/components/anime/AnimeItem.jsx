import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { SingleResult } from '../../context/AnimeActions'

const AnimeItem = ({ anime: { images, title, mal_id
} }) => {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avtar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={images.jpg.large_image_url} alt={title} />
            </div>
          </div>
        </div>
        <div>
          <h2 className='card-title'>{title}</h2>
          <Link
            className='text-base-content text-opacity-40'
            to={`/${mal_id}`}
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimeItem;
