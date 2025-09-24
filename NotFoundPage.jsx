import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className='bg-purple-200 w-full h-screen flex items-center justify-center'>
            <div className="flex items-center justify-center flex-col gap-5">
                <h1 className='text-7xl font-extrabold text-pink-800'>404 Page Not Found</h1>
                <Link to='/' className='text-xl hover:underline outline-none tracking-wider p-2 text-blue-500'>Click Go to Home Page</Link>
            </div>


        </div>
    )
}

export default NotFoundPage
