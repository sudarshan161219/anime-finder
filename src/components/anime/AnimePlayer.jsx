import React, { useEffect, useState } from "react";
import {
  Player,
  DefaultUi,
  Ui,
  ClickToPlay,
  Spinner,
  Poster,
  DefaultControls,
  DblClickFullscreen,
  Hls,
} from "@vime/react";
import Loading from "../layouts/Loading";

import TapSidesToSeek from "./TapSidesToSeek";
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
  }, [value]);



  const { sources_bk } = epUrl;

if(loading){
  return <Loading/>
}


    return (
      <>
        <Player>
          <Hls version='latest' poster={img}>
            <source
              data-src={sources_bk[0].file}
              type={sources_bk[0].type}
            />
          </Hls>

          <Ui>
            <DblClickFullscreen />
            <ClickToPlay />
            <Spinner />
            <Poster />
            <TapSidesToSeek />
          </Ui>

          <DefaultUi noControls>
            <DefaultControls hideOnMouseLeave activeDuration={2000} />
          </DefaultUi>
        </Player>

        <div className='carousel rounded-box'>
          <div className='carousel-item'>
            {episodeList.map((ep, indx) => (
                <button
                  key={indx}
                  className='btn gap-1 m-2 text-sm text'
                  onClick={() => setValue( ep.episodeNum)}
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
