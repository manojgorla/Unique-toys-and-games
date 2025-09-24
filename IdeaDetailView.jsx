import React from 'react'
import Comments from '../Components/Comments'
import { ThumbsUp, MessageCircleMore } from 'lucide-react'

const IdeaDetailView = () => {
    return (
        <div className='h-screen  flex'>
            {/* Left Side */}
            <div className="w-1/2 h-full bg-slate-500">
                <div className=""></div>
            </div>

            {/* Right Side */}
            <div className="w-1/2 h-full bg-slate-300 py-10 px-6">
                <div className=" flex lg:items-center justify-between lg:flex-row flex-col gap-5">
                    <h2 className='text-3xl font-semibold font-Merienda '>Toy & Game Title Name</h2>
                    <div className=" flex items-center gap-2 text-sm">
                        <ThumbsUp size={23} />  <span>233</span>
                    
                    </div>
                </div>
                <h4 className='mt-5 text-2xl font-mono font-semibold'>Idea Description :</h4>
                <p className=' mt-2 px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id doloribus voluptatem minus maiores rem assumenda quidem velit! Earum ducimus omnis commodi veniam quia numquam molestiae ratione, excepturi ut suscipit!</p>
                <div className=" mt-5">
                <Comments />
            </div>
            </div>
           

        </div>
    )
}

export default IdeaDetailView
