import Link from 'next/link'
import React from 'react'
import { BsProjector } from 'react-icons/bs'
import { FaRegCheckCircle } from 'react-icons/fa'
import { GrNotes } from 'react-icons/gr'
import { HiDotsVertical } from 'react-icons/hi'
import { TbProgress } from 'react-icons/tb'

const page = () => {
  return (
    <div className='p-6 flex flex-col gap-12 font-IBMPlex '>
      
      <main className=' grid grid-cols-3 gap-4'>
        <section className='space-y-6 p-6 bg-neutral-800 rounded-2xl'>
          <h2 className='text-xl font-bold'>Overall Information</h2>
          <div className='flex divide-x divide-neutral-400 *:flex *:items-center *:gap-1'>
            <div className='pr-8'>
              <p className='text-3xl font-medium'>43</p>
              <p className='text-xs text-neutral-500'>Tasks done for all time</p>
            </div>
            <div className='self-end pl-8'>
              <p className='text-3xl font-medium'>2</p>
              <p className='text-xs text-neutral-500'>projects are stopped</p>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-2  *:flex-col *:flex *:items-center *:text-neutral-900 *:bg-neutral-300 *:rounded-2xl *:p-2'>
            <div>
              <BsProjector className='size-5'/>
              <p className='text-2xl font-medium'>28</p>
              <p className='text-xs font-bold text-neutral-600'>Projects</p>
            </div>
            <div>
              <TbProgress className='size-5'/>
              <p className='text-2xl font-medium'>13</p>
              <p className='text-xs font-bold text-neutral-600'>In Progress</p>
            </div>
            <div>
              <FaRegCheckCircle className='size-5'/>
              <p className='text-2xl font-medium'>2</p>
              <p className='text-xs font-bold text-neutral-600'>Completed</p>
            </div>
          </div>
        </section>
        <section className='flex flex-col gap-6 col-span-2 p-6 bg-neutral-800 rounded-2xl '>
          <h2 className='text-xl font-bold'>Task In Progress</h2>
          <main className='grid grid-cols-3 gap-5 flex-1 '>
            <div className='p-4 rounded-2xl bg-neutral-200   flex-col flex justify-between'>
              <div className='flex justify-between items-center text-neutral-700 *:size-7 *:p-1'>
                <GrNotes/>
                <HiDotsVertical className='cursor-pointer bg-transparent transition-all duration-500 rounded-full hover:bg-neutral-300 '/>
              </div>
              <div className='space-y-3'>
                <p className='text-sm font-medium text-neutral-800'>Buy a cake for Susan she is hungry</p>
                <p className='text-sm text-neutral-500'>Today</p>
              </div>
            </div>
            <div className='p-4 rounded-2xl bg-neutral-200   flex-col flex justify-between'>
              <div className='flex justify-between items-center text-neutral-700 *:size-7 *:p-1'>
                <GrNotes/>
                <HiDotsVertical className='cursor-pointer bg-transparent transition-all duration-500 rounded-full hover:bg-neutral-300 '/>
              </div>
              <div className='space-y-3'>
                <p className='text-sm font-medium text-neutral-800'>Buy a cake for Susan she is hungry</p>
                <p className='text-sm text-neutral-500'>Today</p>
              </div>
            </div>
            <div className='rounded-2xl bg-transparent flex justify-center items-center text-neutral-300 border border-dashed'>
              <p>+ Add Task </p> 
            </div>
          </main>
        </section>
      </main>
      <div className='flex flex-col gap-10 col-span-2 p-6 bg-neutral-800 rounded-2xl '>
       <h2 className='text-xl font-bold'>Recent Tasks</h2>
       <main className='grid grid-cols-5 gap-3 flex-1 '>
         <div className='p-4 rounded-2xl bg-neutral-200   flex-col flex gap-3 justify-between'>
           <div className='flex gap-2 items-center text-green-500'>
              <div className='size-1 rounded-full shadow-[0_0_20px_10px] bg-green-500 shadow-green-500 animate-pulse'/>
              <p className='text-sm font-semibold'>Completed</p>
           </div>
           <div className='space-y-3'>
             <p className='text-sm font-medium text-neutral-800'>Buy a cake for Susan she is hungry</p>
             <p className='text-sm text-neutral-500'>Today</p>
           </div>
         </div>
         <div className='p-4 rounded-2xl bg-neutral-200   flex-col flex justify-between'>
           <div className='flex gap-2 items-center text-green-500'>
              <div className='size-1 rounded-full shadow-[0_0_20px_10px] bg-green-500 shadow-green-500 animate-pulse'/>
              <p className='text-sm font-semibold'>Completed</p>
           </div>
           <div className='space-y-3'>
             <p className='text-sm font-medium text-neutral-800'>Buy a cake for Susan she is hungry</p>
             <p className='text-sm text-neutral-500'>Today</p>
           </div>
         </div>
         <div className='p-4 rounded-2xl bg-neutral-200   flex-col flex justify-between'>
           <div className='flex gap-2 items-center text-green-500'>
              <div className='size-1 rounded-full shadow-[0_0_20px_10px] bg-green-500 shadow-green-500 animate-pulse'/>
              <p className='text-sm font-semibold'>Completed</p>
           </div>
           <div className='space-y-3'>
             <p className='text-sm font-medium text-neutral-800'>Buy a cake for Susan she is hungry</p>
             <p className='text-sm text-neutral-500'>Today</p>
           </div>
         </div>
         <div className='p-4 rounded-2xl bg-neutral-200   flex-col flex justify-between'>
           <div className='flex gap-2 items-center text-green-500'>
              <div className='size-1 rounded-full shadow-[0_0_20px_10px] bg-green-500 shadow-green-500 animate-pulse'/>
              <p className='text-sm font-semibold'>Completed</p>
           </div>
           <div className='space-y-3'>
             <p className='text-sm font-medium text-neutral-800'>Buy a cake for Susan she is hungry</p>
             <p className='text-sm text-neutral-500'>Today</p>
           </div>
         </div>
         <div className='p-4 rounded-2xl bg-neutral-200   flex-col flex justify-between'>
           <div className='flex gap-2 items-center text-green-500'>
              <div className='size-1 rounded-full shadow-[0_0_20px_10px] bg-green-500 shadow-green-500 animate-pulse'/>
              <p className='text-sm font-semibold'>Completed</p>
           </div>
           <div className='space-y-3'>
             <p className='text-sm font-medium text-neutral-800'>Buy a cake for Susan she is hungry</p>
             <p className='text-sm text-neutral-500'>Today</p>
           </div>
         </div>
       </main>
      <Link href={'/tasks'} className='self-center px-8 py-4 rounded-2xl text-lg font-medium bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-700 text-neutral-300 hover:text-neutral-50 transition-all '>View All Tasks &rarr;</Link>
       
     </div>
   </div>
  )
}

export default page