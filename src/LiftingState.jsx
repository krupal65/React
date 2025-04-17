import { useState } from "react"

export const LiftingState=()=>{
    const[inputvalue,SetInputvalue]=useState("");
    return (
        <>
<h1>I am LifitingState</h1>
  
  <Lifting1 inputvalue={inputvalue} SetInputvalue={SetInputvalue}/>
  <Lifting2 inputvalue={inputvalue} SetInputvalue={SetInputvalue}/>
    
    </>
    )
}



 const Lifting1=({inputvalue,SetInputvalue})=>
 {
    // const[inputvalue,SetInputvalue]=useState("");
    return (<>
        <p>this lifing 1</p>
        <input type="text" value={inputvalue} onChange={(e)=>SetInputvalue(e.target.value)}></input>
     {/* {inputvalue} */}
        </>
    )
 }

 const Lifting2=({inputvalue,SetInputvalue})=>
    {
       return (<>
           <p>this lifing 2</p>
           {inputvalue}
           </>
       )
    }
   
