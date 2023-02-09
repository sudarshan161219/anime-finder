import React, { useContext, useEffect } from "react";
import WallPaperList from "./WallPaperList";
import AnimeContext from "../../context/AnimeContext";
import { getWalls } from "../../context/AnimeActions";
import Loading from "../layouts/Loading";

const WallPapers = () => {
  const { walls, loading, dispatch } = useContext(AnimeContext);

  useEffect(() => {
    const getAnimewalls = async () => {
      const getWall = await getWalls();

      dispatch({
        type: "GET_WALLS",
        payload: getWall,
      });
    };
    getAnimewalls();
  }, []);

  console.log(walls)

  if(!loading){
  return (
    <div  className="masonry-container" >
      {walls.map((item) => (
        <WallPaperList key={item.art_id} art={item} />
      ))}
    </div>
  )
  } else{
    return <Loading />
  }
};

export default WallPapers;
