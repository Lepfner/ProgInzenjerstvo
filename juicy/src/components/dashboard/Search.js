import React, {useState} from 'react'

const Search = ({search}) => {
  const[text,setText]= useState('')
  const onSearch = (q)=>{
      setText(q)
      search(q)
  }
  return (
    <>
      <input className='pl-2 bg-gray-200 h-12 mt-10 w-96 border-solid rounded-xl focus:outline-none'
      placeholder='Search for a name, surname, username...' 
      value={text} autoFocus type="text" onChange={(e)=>onSearch(e.target.value)}>
      </input>
    </>
  )
}

export default Search