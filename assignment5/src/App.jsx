
import './App.css';
import { useState,useEffect} from 'react';

function App() {
  const [show,setShow] = useState(true);

  useEffect((show) => {
   const getData =  fetch("http://localhost:8080/posts").then()
    
  })
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
