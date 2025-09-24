import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserCircle2 } from 'lucide-react'
import {useNavigate} from 'react-router-dom'

const navlinks = [
    { title: 'Home', path: '/' },
    { title: 'Games', path: '/games' },
]
let normalLink ='font-Merienda relative text-xl outline-none font-semibold '
let activeLink ='font-Merienda relative text-xl outline-none font-semibold text-buttonBg after:w-2 after:h-2 after:-bottom-2 after:left-1/2  after:absolute  after:bg-buttonBg after:rounded-md'
const Header = () => {
    const Navigate= useNavigate()

    const handelSignOut=()=>{
            localStorage.removeItem('user')
            Navigate('/login')
          

    }
    return (
        <div className='h-16 flex fixed right-2 left-2 items-center justify-between  pr-12 bg-white shadow-lg rounded-xl  mb-2 mt-2 z-50'>
            <h1 className='font-Marck text-4xl pl-4 font-bold'>KidJoy</h1>
            <div className="flex items-center justify-around gap-3">
                {navlinks.map(({ title, path }, index) => (
                    <NavLink to={path} key={index}
                    className={({ isActive }) => isActive ? activeLink : normalLink}
                    >{title}</NavLink>
                ))}

            </div>

            <div className="flex items-center gap-3 ">
                <button className='p-2 text-xl font-semibold rounded-lg bg-primary text-white font-mono hover:bg-[#124133]'
                onClick={handelSignOut}>SignOut</button>

                <UserCircle2 size={40} />
            </div>
        </div>
    )
}

export default Header
