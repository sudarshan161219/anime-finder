import React, { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
const EpisodeBadge = ({ ep: { episodeNum, episodeUrl } }) => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(e.target.innerText);
  };

  // console.log(value);
  return (
    <>
      <button className='btn gap-1 m-2' onClick={handleClick} value={value}>
        Ep-{episodeNum}
        <a href={episodeUrl} target='_blank' className='badge badge-secondary'>
          <AiOutlineLink />
        </a>
      </button>
    </>
  );
};

export default EpisodeBadge;
