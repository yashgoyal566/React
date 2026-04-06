import React from 'react'
import {useState} from "react"
// import Note from "./assets/Note.png";

const App = () => {
  const[title,setTitle]=useState("")
  const[detail,setDetails]=useState("")
  const[task,setTask]=useState([])
  const submitHandler=(e)=>{
    e.preventDefault();
    // console.log(title,detail);
    const copyTask=[...task];
    copyTask.push({title,detail});
    setTask(copyTask);
  
    // console.log(copyTask);
    setTitle("")
    setDetails("")

  }
  const deleteNotes=(idx)=>{
    const copyTask =[...task];
    copyTask.splice(idx,1)
    setTask(copyTask);
    
  }
  return (
    <div className="bg-black min-h-screen lg:flex text-white ">
     
     <form onSubmit={(e)=>{
      submitHandler(e);
     }} className="flex  p-10 lg:w-1/2  gap-4 flex-col items-start ">
     <h1 className="text-4xl font-bold ">Add Note</h1>
      <input
      type="text"
      placeholder='Enter Task'
      className="w-full rounded px-5 py-2 font-medium border-2 outline-none"
      value={title}
      onChange={(e)=>{
        setTitle(e.target.value)
      }}
      />
      <textarea
      type="text"
      placeholder="Enter Details"
      className="font-medium w-full px-6 py-2 border-2 outline-none rounded h-32"
      value={detail}
      onChange={(e)=>{
      setDetails(e.target.value)
      }}
      />
{/* active:bg-gray-300   it gives an effect on clickable that require another color active:scale-95
*/}
      <button className=" cursor-pointer active:scale-95 w-full bg-white text-black font-medium rounded px-5 py-2">Add Note</button>
    
     </form>
     <div className="p-10   lg:border-l-2 lg:w-1/2  ">
     <h1 className="text-4xl font-bold ">Recent note</h1>
     <div className="flex flex-wrap  gap-5 mt-5 h-[90%] overflow-auto" id="right">
      {task.map(function(elem,idx){
        return  <div key={idx}className=" flex flex-col justify-between items-start  h-52 w-40 rounded-2xl pt-9 pb-3 px-4 text-black bg-[url('/Notes.png')] bg-cover">
          <div>
          <h3 className="leading-tight text-lg font-bold"> {elem.title}</h3>
          <p className="leading-tight text-xs text-gray-600 mt-2 font-semibold">{elem.detail}</p>
          </div>
          <button onClick={()=>{
            deleteNotes(idx)}}className="w-full cursor-pointer active:scale-95 bg-red-500 text-xl font-bold text-white rounded ">Delete </button>
        </div>
      })}
    
     
    
     
     

     </div>
     </div>
    </div>
  )
}

export default App
