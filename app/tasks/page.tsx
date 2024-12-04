import React from 'react'
import SearchBox from '@/components/SearchBox'
import { BsArrowUpRight } from 'react-icons/bs'


const page = () => {
  return (
    <div className='p-6 flex-1  font-IBMPlex'>
      <main className=' p-6 flex flex-col gap-12 bg-neutral-800 rounded-2xl'>
        <div className='flex items-center gap-6'>
          <SearchBox/>
          <button className='px-6 py-3 tracking-wider font-medium bg-gradient-to-r from-purple-800 via-purple-600 to-purple-700 rounded-full text-purple-200 hover:text-purple-50 active:scale-95 transition-all '>+ Create</button>
        </div>
        <section className='space-y-4'>
          <h2 className='text-xl font-bold'>Your Tasks</h2>
          <main className='grid grid-cols-4 gap-6'>
            <h1 className='px-2 py-1 rounded-lg font-medium text-center bg-neutral-300 text-neutral-900'>To-do</h1>
            <h1 className='px-2 py-1 rounded-lg font-medium text-center bg-neutral-300 text-neutral-900'>In-progress</h1>
            <h1 className='px-2 py-1 rounded-lg font-medium text-center bg-neutral-300 text-neutral-900'>Completed</h1>
            <h1 className='px-2 py-1 rounded-lg font-medium text-center bg-neutral-300 text-neutral-900'>Overdue</h1>
            <section className='flex flex-col gap-3 *:rounded-2xl *:p-4'>
              <div className=' bg-neutral-200 flex-col flex gap-4'>
                <div className='flex justify-between items-center '>
                  <div className='flex gap-2 items-center text-green-500'>
                    <div className='size-1 rounded-full shadow-[0_0_20px_10px] bg-green-500 shadow-green-500 animate-pulse'/>
                    <p className='text-sm font-semibold'>Completed</p>
                  </div>
                  <BsArrowUpRight className='text-black p-1 size-6 cursor-pointer rounded-full hover:bg-neutral-500 transition-all'/>
                </div>
                <div className='space-y-2'>
                  <p className='text-sm font-medium text-neutral-800'>Buy a cake for Susan she is hungry</p>
                  <p className='text-sm text-neutral-500'>Today</p>
                </div>
              </div>
            </section>
          </main>

        </section>

      </main>

    </div>

  )
}

export default page