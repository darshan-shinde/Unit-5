import { useState } from "react"

function Todo({getData}){
    const [text,setText] = useState("");
    
    const getData = (todo) => {
        set
    }
    return <div>

        <input onChange = {(e) => {
            // console.log(text)
             setText(e.target.value);
         } }type="text" placeholder="Enter The Things Todo List"/>
        <button onClick = {() => {
           getData(text);
        }}>+</button>
        {/* <div>{text}</div> */}
        
    </div>
    
}

export {Todo}