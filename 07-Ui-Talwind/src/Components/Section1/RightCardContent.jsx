import React from 'react'
import { ArrowRight } from 'lucide-react';
const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
    <h2 className=" bg-white w-10 h-10 rounded-full flex justify-center items-center text-sm font-semibold">{props.id}</h2>
    <div > 
        <p className="text-shadow-2xs text-xl leading-normal mb-12 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa minus reprehenderit, aut laborum quibusdam esse!</p>
        <div className="flex justify-between">
            <button className="text-white bg-blue-700 font-medium px-7 py-3 rounded-full">
 {props.tag}
            </button>
            <button className="text-white bg-blue-700 font-medium px-4 py-3 rounded-full flex items-center justify-center">
                <ArrowRight  />
            </button>
        </div>
    </div>

</div>
  )
}

export default RightCardContent
