import React from 'react'
import { MoveRight, Star, StarHalf, ThumbsUp, ArrowUpRightFromSquareIcon } from 'lucide-react'
import Airplane from '../assets/HeaderImages/Airplane.jpeg'
import Car from '../assets/HeaderImages/Car.jpeg'
import Nurturing from '../assets/HeaderImages/Nurturing.jpeg'
import Pyramid from '../assets/HeaderImages/Pyramid.jpeg'
import Weapon from '../assets/HeaderImages/Weapon.jpeg'
import Yellow_Mech from '../assets/HeaderImages/Yellow_Mech.jpeg'
import Gaming from '../assets/HeaderImages/Gaming.jpeg'
import Panda_toy from '../assets/HeaderImages/Panda_toy.jpeg'
import Whimsiacl from '../assets/HeaderImages/Whimsical.jpeg'
import Yellow_Hoodie from '../assets/HeaderImages/Yellow_Hoodie.jpeg'
import { Link } from 'react-router-dom'




const Home = () => {
  return (
    <div className="bg-secondary h-full  ">
      {/* section1*/}
      <div className='h-svh  flex items-center justify-center md:px-20 md:flex-row flex-col'>
        <div className="w-1/2 h-4/5 flex items-start justify-center flex-col md:pl-10 gap-5 animate-fadeLeft">
          <h3 className='font-extrabold font-Merienda text-5xl text-primary w-full'>
            Unleash Your  <br />. . . Imagination</h3>
          <p className='text-xl font-Josefin text-gray-600'>Discover, create, and share unique toy and game ideas with a vibrant community.</p>
          <button className='text-xl font-bold text-white outline-none bg-buttonBg hover:bg-[#CD5C5C] p-3 rounded-lg  font-Merienda'><a href="#someGames" className='flex gap-3 items-center justify-center'>View Ideas <MoveRight /></a></button>
        </div>
        <div className="w-1/2 h-4/5  flex items-center justify-center gap-4 animate-fadeRight">
          <div className="flex items-center flex-col gap-3 md:mt-20">
            <div className="w-40 h-40 rounded-xl overflow-hidden">
              <img src={Nurturing} alt="" className='object-cover w-full h-full hover:scale-110 duration-300' />
            </div>
            <div className="w-40 h-40 rounded-xl overflow-hidden">
              <img src={Pyramid} alt="" className='object-cover w-full h-full hover:scale-110 duration-300' />
            </div>
            <div className="w-40 h-40 rounded-xl overflow-hidden">
              <img src={Gaming} alt="" className='object-cover w-full h-full hover:scale-110 duration-300' />
            </div>
          </div>
          <div className="flex items-center flex-col gap-3 ">
            <div className="w-40 h-40 rounded-xl overflow-hidden">
              <img src={Weapon} alt="" className='object-cover w-full h-full hover:scale-110 duration-300' />
            </div>
            <div className="w-40 h-40 rounded-xl overflow-hidden">
              <img src={Yellow_Mech} alt="" className='object-cover w-full h-full hover:scale-110 duration-300' />
            </div>
            <div className="w-40 h-40 rounded-xl overflow-hidden">
              <img src={Airplane} alt="" className='object-cover w-full h-full hover:scale-110 duration-300' />
            </div>
          </div>

        </div>
      </div>
      {/* section2*/}
      <div className="md:h-96 p-2 flex justify-center flex-col gap-4 px-20 bg-primary">
        <h4 className='text-center text-4xl font-semibold font-Merienda text-buttonBg'>Our vision</h4>
        <div className="flex md:flex-row flex-col gap-10 rounded-xl border-buttonBg p-6 text-[#D8D9DA]">
          <h2 className='md:text-5xl text-3xl md:w-1/2 w-full font-extrabold font-Merienda tracking-wide'>Empowering Creativity in Play</h2>

          <ul className='list-disc'>
            <li className='text-xl font-mono text-[#D8D9DA]'>We aim to inspire creativity and collaboration in toy and game design, bringing innovative ideas to life.</li>
            <li className='text-xl font-mono text-[#D8D9DA]'>Join a platform where creativity meets community, inspiring the next generation of toys.</li>
          </ul>
        </div>
      </div>

      {/* section3 */}
      <div className="flex items-center justify-center">
        <div className=" flex items-center justify-center p-7 flex-col gap-7 w-4/5 bg-white m-3 rounded-lg">

          <h1 className='text-buttonBg text-4xl font-Merienda relative after:w-1/2 after:absolute after:h-2 after:bg-buttonBg after:rounded-lg after:-bottom-3 after:left-1/4'>Submit your Ideas</h1>
          <p className='font-mono text-gray-400'>Share your innovative toy concepts and let the world see your creativity.</p>
          <div className="w-full md:w-3/4  px-4 py-3 flex items-center flex-col gap-2">
            <input
              type="text"
              placeholder="UserName"
              className="bg-transparent w-full focus:outline-none border text-gray-700 p-3 rounded-lg text-xl font-Merienda"
            />
            <input
              type="text"
              placeholder="Toy or Game Name"
              className="bg-transparent w-full focus:outline-none border text-gray-700 p-3 rounded-lg text-xl font-Merienda"
            />
            <select name="" id="" className="bg-transparent  w-full focus:outline-none border text-gray-400  p-3 rounded-lg text-xl font-Merienda">
              <option value="" hidden >Select the Category</option>
              <option value="Toy">Toy</option>
              <option value="Game">Game</option>
            </select>
            <textarea
              rows='4'
              name="" id=""
              placeholder='Description . . .'
              className="bg-transparent w-full h-40 focus:outline-none border text-gray-700  p-3 rounded-lg text-xl font-Merienda" />
            {/* image field */}
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>

            <button className='text-xl w-full font-bold text-white outline-none bg-buttonBg hover:bg-[#CD5C5C] p-3 rounded-lg flex gap-3 items-center justify-center font-Merienda'>
              Submit Ideas
            </button>
          </div>

        </div>
      </div>
      <h1 className='text-primary p-3 text-4xl text-center font-Merienda' id='someGames'
      >Some Of The Top Rated Toys & Games Ideas</h1>
      <div className="flex items-center justify-center p-2">

        <div className="grid grid-cols-2 md:grid-cols-3  gap-4  w-3/5">
          <div className=' rounded-lg h-96 overflow-hidden hover:scale-105 duration-300'>
            <img src={Whimsiacl} alt="" className='w-full h-3/4 object-cover  ' />
            <div className="h-full bg-white">
              <div className="px-2 pt-2">
                <h3 className=' font-Yatra text-xl text-buttonBg'>Toy or Game Name</h3>
                <h5 className='text-sm font-mono  '># UserName</h5>
              </div>
              <div className="flex items-center justify-between gap-1 px-2 pt-1">
                <button className="flex items-center">
                  <ThumbsUp size={30} /> <span>12</span>
                  </button>
                <Link to='/idea/toy&game' className=" flex gap-1 text-blue-600 items-center">
                  View Details <ArrowUpRightFromSquareIcon size={20} />
                </Link>
              </div>

            </div>
          </div>

          <div className=' rounded-lg h-96 overflow-hidden hover:scale-105 duration-300'>
            <img src={Airplane} alt="" className='w-full h-3/4 object-cover  ' />
            <div className="h-full bg-white">
              <div className="px-2 pt-2">
                <h3 className=' font-Yatra text-xl text-primary'>Toy or Game Nam</h3>
                <h5 className='text-sm font-mono  text-buttonBg'>@ UserName</h5>
              </div>
              <div className="flex items-center justify-between gap-1 px-2 pt-1">
                <button className="flex items-center">
                  <ThumbsUp size={30} /> <span>12</span>
                  </button>
                <Link to='/idea/toy&game' className=" flex gap-1 text-blue-600 items-center">
                  View Details <ArrowUpRightFromSquareIcon size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className=' rounded-lg h-96 overflow-hidden hover:scale-105 duration-300'>
            <img src={Car} alt="" className='w-full h-3/4 object-cover  ' />
            <div className="h-full bg-white">
              <div className="px-2 pt-2">
                <h3 className=' font-Yatra text-xl text-primary'>Toy or Game Nam</h3>
                <h5 className='text-sm font-mono  text-buttonBg'>@ UserName</h5>
              </div>
              <div className="flex items-center justify-between gap-1 px-2 pt-1">
                <button className="flex items-center">
                  <ThumbsUp size={30} /> <span>12</span>
                  </button>
                <Link to='/idea/toy&game' className=" flex gap-1 text-blue-600 items-center">
                  View Details <ArrowUpRightFromSquareIcon size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className=' rounded-lg h-96 overflow-hidden hover:scale-105 duration-300'>
            <img src={Yellow_Mech} alt="" className='w-full h-3/4 object-cover  ' />
            <div className="h-full bg-white">
              <div className="px-2 pt-2">
                <h3 className=' font-Yatra text-xl text-primary'>Toy or Game Nam</h3>
                <h5 className='text-sm font-mono  text-buttonBg'>@ UserName</h5>
              </div>
              <div className="flex items-center justify-between gap-1 px-2 pt-1">
                <button className="flex items-center">
                  <ThumbsUp size={30} /> <span>12</span>
                  </button>
                <Link to='/idea/toy&game' className=" flex gap-1 text-blue-600 items-center">
                  View Details <ArrowUpRightFromSquareIcon size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className=' rounded-lg h-96 overflow-hidden hover:scale-105 duration-300'>
            <img src={Panda_toy} alt="" className='w-full h-3/4 object-cover  ' />
            <div className="h-full bg-white">
              <div className="px-2 pt-2">
                <h3 className=' font-Yatra text-xl text-primary'>Toy or Game Nam</h3>
                <h5 className='text-sm font-mono  text-buttonBg'>@ UserName</h5>
              </div>
              <div className="flex items-center justify-between gap-1 px-2 pt-1">
                <button className="flex items-center">
                  <ThumbsUp size={30} /> <span>12</span>
                  </button>
                <Link to='/idea/toy&game' className=" flex gap-1 text-blue-600 items-center">
                  View Details <ArrowUpRightFromSquareIcon size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className=' rounded-lg h-96 overflow-hidden hover:scale-105 duration-300'>
            <img src={Yellow_Hoodie} alt="" className='w-full h-3/4 object-cover  ' />
            <div className="h-full bg-white">
              <div className="px-2 pt-2">
                <h3 className=' font-Yatra text-xl text-primary'>Toy or Game Nam</h3>
                <h5 className='text-sm font-mono  text-buttonBg'>@ UserName</h5>
              </div>
              <div className="flex items-center justify-between gap-1 px-2 pt-1">
                <button className="flex items-center">
                  <ThumbsUp size={30} /> <span>12</span>
                  </button>
                <Link to='/idea/toy&game' className=" flex gap-1 text-blue-600 items-center">
                  View Details <ArrowUpRightFromSquareIcon size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-4">
        <h1 className='text-center w-fit text-3xl font-Playball p-3 hover:text-buttonBg hover:shadow-none duration-200 shadow-lg rounded-lg border-2 border-black'><Link to='/games'>Explore Some Game Now</Link></h1>
      </div>
      {/* footer section */}
      <div className="h py-7 px-10">

        <div className="h-0.5 w-full bg-gray-500 rounded-full"></div>
        <div className="flex items-center justify-between mt- py-6 font-mono ">
          <p className='text-xl'>© {Date().slice(11, 15)} Toy Innovators. All rights reserved.</p>
          <div className="flex items-center justify-evenly gap-4 text-xl font-mono">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookie Preferences</p>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Home
