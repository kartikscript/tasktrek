import SearchBox from '@/components/SearchBox'
import React from 'react'

const page = () => {
  return (
    <div className='p-6 flex-1'>
      <div className='flex items-center gap-6'>
        <SearchBox/>
        <button>addd taks</button>
      </div>
    </div>
  )
}

export default page