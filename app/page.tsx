import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col gap-6 justify-center  items-center">
      <h1 className="font-robotoSerif text-7xl font-semibold tracking-wider">TaskTrek</h1>
      <h2 className="text-neutral-500 text-lg w-[70%] text-center"> A dynamic task management app designed to streamline your workflow, organize tasks effortlessly, and boost productivity with intuitive features</h2>
        <Link href='/dashboard' className='relative group text-lg font-medium bg-neutral-900 text-neutral-300 rounded-lg py-3 px-6 active:scale-95 hover:text-neutral-50 transition-all'>
        Get Started
        <div className="absolute inset-x-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"/>
        <div className="absolute inset-x-0 bottom-0 w-1/2 h-[2px] mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent"/>        
        <div className="absolute inset-x-0 bottom-0 w-full h-[4px] group-hover:h-[6px] transition-all  mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm "/>        
        </Link>
    </div>
  );
}
