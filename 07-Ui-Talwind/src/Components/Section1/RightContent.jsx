import React from 'react'
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id="right" className="h-full flex overflow-x-auto gap-6 w-2/3 p-6 ">
    {props.users.map(function(user,index){
      return <RightCard key={index} img={user.img} tag={user.tag} id={index + 1}/>
    })}
      
     

    </div>
  )
}

export default RightContent
