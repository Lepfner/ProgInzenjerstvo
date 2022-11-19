import React from 'react'
import Search from './Search'

export default function Content() {
  return (
    <div>
        <Search/>
        <div className='h-screen relative'>
          <div className='bg-orange-500 absolute w-3/4 h-96 ml-52 mt-32'>
            AAAA
          </div>
        </div>
    </div>
  )
}
