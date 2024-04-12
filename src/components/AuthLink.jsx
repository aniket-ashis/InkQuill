import Link from 'next/link'
import React from 'react'

const AuthLink = () => {
    //temporary
    const isAuthenticated=false
  return (
    <>
        {isAuthenticated==false?(
            <>
            <Link href={"/login"}>Login</Link>
        </>
        ):(
            <>
            <Link href={"/write"}>Write</Link>
            <span>Logout</span>
            </>
        )}
    </>
  )
}

export default AuthLink