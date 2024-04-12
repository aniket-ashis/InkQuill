

import Link from 'next/link'
import React from 'react'
import AuthLink from './AuthLink'
//import Toggle from './Toggle'

const Navbar = () => {
  return (
    <div className='h-24 w-full bg-black flex items-center'>
      <div className='navbar w-full p-5 flex justify-between'>
          <div className='logo bg-black w-fill h-full'>
            <span className='text-blue-300 font-bold font-mono text-5xl'>Ink</span>
            <span className='text-white font-bold font-mono text-5xl'>Quill</span>
          </div>
          
          <div className="  ">
            <div className=' flex items-center space-x-5 text-2xl font-bold font-mono'>
            {/* <Toggle/> */}
            <Link href={"/"}>homepage</Link>
            <Link href={"/contact"}>contact</Link>
            <Link href={"/about"}>about</Link>
            <AuthLink/>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar





