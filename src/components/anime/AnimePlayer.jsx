import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/file";
const AnimePlayer = ({ img, title, episodeList }) => {
  const [value, setValue] = useState(1);
  const [epUrl, setEpUrl] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(true);
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
  }, [value]);

  const { sources_bk } = epUrl;

  return (
    <>
      <h1 className='text-lg mb-3 font-medium badge badge-outline badge-accent p-3'>
        current episode: {value}
      </h1>

      {loading ? (
        <div className='stats shadow flex  justify-center'>
          <div className='stat '>
            <div className='stat-value text-base text-center '>Loading....</div>
          </div>
        </div>
      ) : (
        <ReactPlayer
          className='react-player mt-4 mb-4'
          url={sources_bk[0].file}
          label={sources_bk[0].label}
          controls={true}
          playsinline={true}
          pip={true}
          light={img}
          volume={1}
          width={"100%"}
          height={'200px'}
          stopOnUnmount={false}
        />
      )}

      <div className='mt-10 shadow-lg rounded-lg bg-slate-800'>
        <div className="episode-container"  >
          <ul className='grid grid-cols-4 lg:grid-cols-7'>
            {episodeList.map((ep) => (
              <li
                key={ep.episodeId}
                className='btn btn-sm gap-1 btn-outline   m-2 text-xs text text-left '
                onClick={() => {
                  setValue(ep.episodeNum);
                  setLoading(true);
                  setEpUrl([]);
                }}
              >
                ep-{ep.episodeNum}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AnimePlayer;
