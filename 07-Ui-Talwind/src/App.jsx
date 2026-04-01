import React from 'react';
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";

const users=[
  { 
    img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
    intro:"",
    tag:"Satisfied"
  },
  { 
    img:"https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    intro:"",
    tag:"underserved"
  },
  {
    img:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
    intro:"",
    tag:"Underbanked"
  },
  {
    img:"https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?s=612x612&w=0&k=20&c=n9yulMNKdIYIQC-Qns8agFj6GBDbiKyPRruaUTh4MKs=",
    intro:"",
    tag:"Underbanked"
  }
]


const App = () => {
  return (
    <>
      <Section1 users={users}/>
      <Section2 />
    </>
  )
}

export default App
