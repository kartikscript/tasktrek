import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchBox = () => {
  return (
    <div className='flex-1 flex items-center gap-2 min-w-20 bg-neutral-700 rounded-3xl p-3'>
      <label htmlFor='searchInput'>
        <BiSearch className='size-6 text-white/50'/>
      </label>
      <input 
       id='searchInput'
       name='searchInput'
       className=' font-medium bg-transparent border-none focus:ring-0 outline-none'
       placeholder='Search your tasks...'
       />
    </div>
  )
}

export default SearchBox