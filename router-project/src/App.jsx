
import './App.css';
import { Routes, Route} from "react-router-dom"
import {Navbar} from './components/navbar'
import {Home} from "./components/home"
import {Products} from "./components/Products"


function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/Products" element={<Products />}></Route>
     </Routes>
    </div>
  );
}

export default App;
