import { useState,useEffect } from "react"

function Todo({getData}){
    const [time,setTime] = useState(0);
    
    useEffect(() => {
      setInterval(() => {
        setTime + 1
      },1000)
    },[])
   
    return <div>


        {/* <input onChange = {(e) => {
            // console.log(text)
             setText(e.target.value);
         } }type="text" placeholder="Enter The Things Todo List"/> */}
        {/* <button onClick = {() => {
           getData(text);
        }}>+</button> */}
        {/* <div>{text}</div> */}
        
    </div>
    
}

export {Todo}