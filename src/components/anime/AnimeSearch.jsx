import React,{useState, useContext} from 'react'
import AnimeContext from '../../context/AnimeContext';
import {SearchResult} from '../../context/AnimeActions'

const AnimeSearch = () => {
    const [text, setText] = useState("");
    const { dispatch} = useContext( AnimeContext )

  const handleSubmit = async (e) => {
e.preventDefault();
dispatch({type: 'SET_LOADING'})
const animes = await SearchResult(text);
dispatch({type: 'GET_ANIME', payload: animes})
setText("");
}

    const handleChange = (e) => {
        setText(e.target.value);
      };
    

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-md text-black'
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-md '
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
    {/* {animes.length > 0  || hello ?  (
            <div>
          <button onClick={() => dispatch({type: 'CLEAR'})} className='btn btn-ghost btn-lg'>
            Clear
          </button>
        </div>
) : null } */}


    </div>
  )
}

export default AnimeSearch