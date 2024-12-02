'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { BiCalendar, BiHome, BiMessage } from 'react-icons/bi'
import { CiSettings } from 'react-icons/ci'
import { MdDashboard, MdOutlineTask } from 'react-icons/md'
import { SiTask } from 'react-icons/si'


const RenderTitle=({title,route,icon}:{title:string,route:string, icon:React.ReactNode})=>{
  const pathname = usePathname()
  const isActive = pathname === route
  return(
    <Link href={route}
     className={`${isActive && 'bg-neutral-700'} tracking-wide flex gap-4 items-center px-6 py-3 rounded-lg text-purple-100 hover:text-purple-400 transition-all duration-200`}
    >
      {icon}{title}
    </Link>
  )
}

const SideBar = () => {
  return (
    <aside className='h-screen p-6 sticky top-0 left-0'>
      <div className=' h-full w-72 p-6 bg-neutral-800 text-neutral-50 font-IBMPlex rounded-2xl shadow-sm shadow-purple-200'>
        <h2 className='font-robotoSerif font-bold text-2xl flex items-center gap-3 mx-6 my-8 bg-gradient-to-r from-purple-800 via-purple-100 to-purple-400 bg-clip-text text-transparent'><SiTask className='size-10 text-purple-800'/> TaskTrek</h2>     
        <nav className='space-y-3'>
          <RenderTitle title='Home'route='/' icon={<BiHome className='size-5'/>}/>
          <RenderTitle title='Dashboard'route='/dashboard' icon={<MdDashboard className='size-5'/>}/>
          <RenderTitle title='Tasks' route='/tasks' icon={<MdOutlineTask className='size-5'/>}/>
          <RenderTitle title='Calender' route='/calender' icon={<BiCalendar className='size-5'/>}/>
          <RenderTitle title='Settings' route='/settings' icon={<CiSettings className='size-5'/>}/>
          <RenderTitle title='Messages' route='/messages' icon={<BiMessage className='size-5'/>}/>
        </nav> 
      </div>
    </aside>
  )
}

export default SideBar