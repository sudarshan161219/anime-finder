import React, { useContext, useEffect, useState } from "react";
import {
  Player,
  Video,
  DefaultUi,
  Ui,
  ClickToPlay,
  Spinner,
  Poster,
  DefaultControls,
  Hls
} from "@vime/react";
import Loading from "../layouts/Loading";
import ReactPlayer from "react-player";
import TapSidesToSeek from "./TapSidesToSeek";
const AnimePlayer = ({ img, title }) => {
  // const { loading } = useContext(AnimeContext);
  const [epUrl, setEpUrl] = useState([]);
  const [loading, setLoading] = useState(true);

  const animeEpUrl = import.meta.env.VITE_ANIME_DETAILS;

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch(
          `${animeEpUrl}/vidcdn/watch/${title.replace(
            /\s+/g,
            "-"
          )}-episode-${1}`
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

  // console.log(epUrl.sources_bk.file)

  const { sources, sources_bk } = epUrl;
  // const url = sources_bk.file
  // console.log(sources_bk[0]);
  // const url =  sources_bk.forEach((source) => {source.file})
  if (!loading) {
    return (
      <Player>

        <Hls version="latest"  poster={img}>
        <source 
         src={sources_bk[0].file} 
        type={sources_bk[0].type}
         />

        {/* <track
            default
            kind='subtitles'
            src='https://media.vimejs.com/subs/english.vtt'
            srcLang='en'
            label={sources_bk[0].label}
          /> */}
      </Hls>

         
  
        <Ui>
          {/* Vime components. */}
          <ClickToPlay />
          <Spinner />
          <Poster />
          {/* Custom component. */}
          <TapSidesToSeek />
        </Ui>

        <DefaultUi noControls>
        {/* We setup the default controls and pass in any options. */}
        <DefaultControls hideOnMouseLeave activeDuration={2000} />
      </DefaultUi>
      </Player>
    );
  } else {
    <Loading />;
  }
};

export default AnimePlayer;
