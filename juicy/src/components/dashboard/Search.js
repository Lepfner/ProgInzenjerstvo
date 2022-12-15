import React, {useState} from 'react'

const Search = ({search}) => {
  const[text,setText]= useState('')
  const onSearch = (q)=>{
      setText(q)
      search(q)
  }

  return (
    <>
      <input className='pl-2 bg-gray-200 h-12 mt-10 border-solid rounded-xl focus:outline-none lg:w-1/3 md: w-1/2 max-sm: w-2/3'
      placeholder='Search for a name, surname, username...' 
      value={text} autoFocus type="text" onChange={(e)=>onSearch(e.target.value)}>
      </input>
    </>
  )
}

export default Search