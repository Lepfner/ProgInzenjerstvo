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
        <div className='h-3/4 relative w-full flex justify-center items-center'>
          <div className='bg-orange-500 w-3/4 h-3/4'>

          </div>
        </div>
    </>
  )
}
