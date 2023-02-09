import React from 'react'
import {saveAs} from "file-saver";

const WallPaperList = ({art:{arturl, art_id, animename}}) => {

    const handleClick = (e)=>{
        let url = e.target.arturl
        saveAs(url, "Twitter-logo");
        FileSaver.saveAs(file)
       }

  return (
 <div className='masonry-item shadow-lg rounded-xl' >
    <img className="img-card2 rounded-xl" src={arturl} alt={art_id} />
    <button onClick={handleClick}>Dowload image</button>
</div>
  )
}

export default WallPaperList