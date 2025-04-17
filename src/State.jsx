import { useEffect, useState } from "react"

import './index.css';
export const State=()=>{
const[count,setcount]=useState(0);
const update=()=>{
    setcount((count)=>(count+1))
    
}
useEffect(()=>{
    setTimeout(() => {
        console.log("print")
    }, 1000);
   
},[])

    return (
        <>
       <h1>{count}</h1> 
        <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition duration-300 " onClick={update} >click me</button>
        <State1/> {/*//when i clcik on click me button so that time also rerender a state1 and also prinbt in console
       */}
           </>
    )
    

}
<Sibling/>// this state is out of a State so this Sibilng is sibilng means this is noyt in State so this is not run in State

function State1(){
    console.log("i am state 1")
 return (
    <>  <button>State1</button>
</>
  

 )   
}

function Sibling(){
    console.log("i am sibiling componet");
    return(
        <>
    <button> SIBILNIG</button>
    </>
    )
}
