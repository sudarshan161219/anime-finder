import React from 'react'
import {AiOutlineLink} from 'react-icons/ai'

const EpisodeBadge = ({ep:{episodeNum, episodeUrl }}) => {
  return (
    // <div className="badge badge-lg m-2">{episodeNum}</div>
    <button className="btn gap-2 m-2">
Ep-{episodeNum}
  <a  href={episodeUrl} target="_blank" className="badge badge-secondary"><AiOutlineLink /></a>
</button>
  )
}

export default EpisodeBadge