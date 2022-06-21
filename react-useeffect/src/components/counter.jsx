import React from "react";
import {useState} from "react"


export const Counter = () => {
    const [count,setCount] = useState(0)

    const inc=()=>{
        setCount(
            count+1
        )
    }

    console.log(count)
    return (
        <div className="App">
        <div>counter :{count}</div>
        <button onClick={inc}>start</button>
        </div>
        )
}



