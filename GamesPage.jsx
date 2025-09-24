import React from 'react'
import { Gamepad2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import mindgames from '../assets/HeaderImages/mindgames.jpg'
import sanke from '../assets/HeaderImages/sanke.jpg'
import memory from '../assets/HeaderImages/memory.png'
import Tictoc from '../assets/HeaderImages/Tictoc.jpg'


const GamesPage = () => {

  const games = [
    { path:'TicTacToe',name: 'TicTacToe Game', image: Tictoc },
    { path:'MindGames',name: 'Mind Games', image: mindgames },
    { path:'MemoryGame',name: 'Memory Game', image: memory },
    { path:'SnakeGame',name: 'Snake Game', image: sanke },
  ]
  return (

    <div className=' bg-blue-50 pt-24 w-full h-screen '>
     

      <div className="flex items-center justify-around gap-4 p-4 mt-2">
        {games.map(({path, name, image }, index) => (
          <div className='hover:scale-105 duration-300'>
            <h2 className='py-2 text-xl font-mono text-center text-primary'>{name}</h2>
            <div className=' rounded-lg h-72 w-72 overflow-hidden  flex items-center  flex-col gap-3 ' key={index}>


              <div className="h-4/5  w-full rounded-xl overflow-hidden">
                <img src={image} alt="" className='w-full h-full' />
              </div>

              <Link to={`/game/${path}`} className='flex items-center gap-3 justify-center bg-blue-600 text-white rounded-xl w-full p-2 text-xl'>Play<Gamepad2 size={22} className='pt'/></Link>



            </div>

          </div>




        ))}
      </div>
    </div>
  )
}

export default GamesPage



