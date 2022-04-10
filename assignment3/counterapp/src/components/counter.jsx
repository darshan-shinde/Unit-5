import {useState} from "react"
import '../App.css';

export const Counter = () => {
    const [count,setCount] = useState(0);
    return (
        <div className="App">
           <h1 className={count % 2 === 0 ? "even" : "odd"}>Counter : {count}</h1>
           <button onClick={() => {
              
             setCount(count+1)
           }}>Add 1</button>
           <button onClick={() => {
                if(count <= 0){
                    return
                }
             setCount(count-1)
           }}>Sub 1</button>
           <button onClick={() => {
             setCount(count*2)
           }}>Double</button>
        </div>
      
    )
}