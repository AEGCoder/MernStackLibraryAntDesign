import React from 'react'
import {Link} from "react-router-dom"
const HeaderComp = () => {
  return (
    <div className='border-b-2 h-[70px] flex items-center justify-between px-10 z-50'>
        <div className='z-50'>
            <ul className='flex items-center gap-x-5 z-50 font-bold tracking-widest sm:text-2xl text-sm'>
                <Link to ="/" className='cursor-pointer hover:text-blue-500 transition-all duration-300'>Home</Link>
                <Link to ="books" className='cursor-pointer hover:text-blue-500 transition-all duration-300'>Books</Link>
                <Link to ="addbooks" className='cursor-pointer hover:text-blue-500 transition-all duration-300'>Add Book</Link>
            </ul>
        </div>
    </div>
  )
}

export default HeaderComp