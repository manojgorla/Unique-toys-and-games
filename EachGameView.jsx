import React from 'react'
import {useParams,Link} from 'react-router-dom'
import {MoveLeft} from 'lucide-react'
import { TicTacToe,MindGamesCollection,MemoryGame,SnakeGame } from '../Components/AllGames'

const EachGameView = () => {
    const {name}=useParams()
    
const GameHandelar=()=>{
    switch (name) {
        case 'TicTacToe': return <TicTacToe/>
            break;
        case 'MindGames': return <MindGamesCollection/>
            break;
        case 'MemoryGame': return <MemoryGame/>
            break;
        case 'SnakeGame': return <SnakeGame/>
            break;
        default: return <p>Game Not Found</p>
            break;
     }
}
return(
    <div className="h-screen ">
        <Link to='/games' className='flex absolute left-9 top-10'><MoveLeft size={60}/></Link>
      <div className="flex items-center justify-center  h-screen">
      {GameHandelar()}
      </div>
    </div>
)
}

export default EachGameView
