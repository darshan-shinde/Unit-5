
import './App.css';
import { useState,useEffect} from 'react';

function App() {
  const [time,setTime] = useState(0);
    
  useEffect(() => {
   const id  = setInterval((preValue) => {
      setTime((a) => {
        if(a >= 10){
          clearInterval(id)
          return 0
        }
        return a + 1
      })
    },1000)
  },[])
  
  return (
    <div className="App">
     
     <div >Timer : {time} Seconds</div>
    </div>
  );
}

export default App;
