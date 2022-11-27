import React, {useState, useEffect} from 'react';
import Search from './Search';

export default function Content() {

  const [query,setQuery]= useState('');

  useEffect(() => {
    //Work in progress
  })

  return (
    <>
        <Search search={(q)=>setQuery(q)}/>
        <div className='h-screen relative'>
          <div className='bg-orange-500 absolute w-3/4 h-96 ml-52 mt-32'>

          </div>
        </div>
    </>
  )
}
