import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ReactPlayer from "react-player/file";
const AnimePlayer = ({ img, title, episodeList }) => {
  const [value, setValue] = useState(1);
  const [epUrl, setEpUrl] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Select, setSelect] = useState(4);

  // const animeEpUrl = import.meta.env.VITE_ANIME_DETAILS;
  const animeEpUrl = import.meta.env.VITE_ANIME_URL;
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        // https://api.consumet.org/anime/gogoanime/watch/naruto-episode-1
        const url = `${animeEpUrl}/gogoanime/watch/${title}-episode-${value}`;
        const response = await fetch(url);
        const info = await response.json();
        setEpUrl(info);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error(`Opps!!, no Streaming Links for ${title}`, {
          position: toast.POSITION.TOP_RIGHT
      });
      }
    };
    fetchInfo();
  }, [value , Select]);

  const { sources } = epUrl;
console.log(epUrl)
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
        <>
          <ReactPlayer
            className='react-player mt-4 mb-4'
            url={sources[Select].url}
            // label={sources_bk[0].label}
            controls={true}
            playsinline={true}
            pip={true}
            light={img}
            volume={1}
            width={"100%"}
            height={"350px"}
            stopOnUnmount={false}
          />
 <select  onChange={(e) => setSelect(e.target.value)} className="select w-full max-w-xs">
  <option disabled selected>Select Video quality</option>
  <option value="1" >360p</option>
  <option value="2" >480p</option>
  <option value="3" >720p</option>
  <option value="4" >1080p</option>
</select>
        </>
      )}

      <div className='mt-10 shadow-lg rounded-lg bg-slate-800'>
        <div className='episode-container'>
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
