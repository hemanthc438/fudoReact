import React from 'react'
import schimmer from '../assets/gifs/schimmer.gif'
const Schimmer = () => {
  return (
        <div className="flex flex-col m-1 h-70 w-full mx-auto rounded-xl ">
            <img className='w-full h-45 rounded-xl shadow' alt="img" src={schimmer}></img>
            <div className='p-2'>
            <img className='mt-2 h-5 w-full rounded-xl' alt="name" src={schimmer}></img>
            <img className='mt-2 h-5 w-6/10 rounded-xl' alt="name" src={schimmer}></img>
            <img className='mt-2 h-5 w-3/10 rounded-xl' alt="name" src={schimmer}></img>
            </div>
        </div>
      )
}

export default Schimmer