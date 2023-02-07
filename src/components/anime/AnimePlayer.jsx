import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Loading from "../layouts/Loading";
const AnimePlayer = ({ img, title, episodeList }) => {
  const [value, setValue] = useState(1);
  const [epUrl, setEpUrl] = useState([]);
  const [loading, setLoading] = useState(true);

  const animeEpUrl = import.meta.env.VITE_ANIME_DETAILS;

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch(
          `${animeEpUrl}/vidcdn/watch/${title}-episode-${value}`
        );
        const info = await response.json();
        setEpUrl(info);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInfo();
  }, []);

  const { sources_bk } = epUrl;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
<h1 className='text-lg mb-3 font-medium'>Episode: {value}</h1>
      <ReactPlayer
        className='react-player mt-4 mb-4'
        url={sources_bk[0].file}
        controls={true}
        playsinline={true}
        pip={true}
        light={img}
        volume={1}
        width={"100%"}
        height={"300px"}
        stopOnUnmount={false}
      />

      <div className='carousel rounded-box card-body '>
        <div className='grid grid-cols-3'>
          {episodeList.map((ep) => (
            <button
              key={ep.episodeId}
              className='btn btn-xs gap-1 m-2 text-sm text'
              onClick={() => setValue(ep.episodeNum)}
            >
              episode-{ep.episodeNum}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnimePlayer;
