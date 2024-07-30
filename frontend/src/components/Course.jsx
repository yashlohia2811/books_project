import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
    <div className="max-w-srceen-2x1 container mx-auto md:px-20 px-4">
        <div className='mt-28 items-center justify-center text-center'>
       <h1 className='text-2xl'>We're delighted to have you<span className='text-pink-500'> Here :)</span></h1> 
       
       <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quos expedita laborum dicta possimus exercitationem repellat non iste quisquam nam aspernatur. Architecto porro aliquid fugiat accusamus consequuntur. Soluta, ut. Sit!</p>
    <Link to="/">
    <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
   
    </Link>
    </div>
    <div className='mt-12 grid grid-cols-3'>
    
           {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        
    </div>
    </div>
    </>
  )
}

export default Course
