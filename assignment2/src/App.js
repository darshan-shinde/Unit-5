import logo from './logo.svg';
import './App.css';

function App() {
 const systems = ["Android","Blackberry","iPhone","Windows Phone"];
 const opr = ["Samsung","HTC","Micromax","Apple"]
 return(
   <div className="App">
    <div>
   <h1>Mobile Operating System</h1> 
    <ul>
      {systems.map((e) => {
         return <li><h3>{e}</h3></li>
      })}
    </ul>
    </div>
    <div>
    <h1>Mobile Manufacturers</h1>
    <ul>
      {opr.map((e) => {
         return <li><h3>{e}</h3></li>
      })}
    </ul>
    </div>
   
   </div>
 )

}
function Mobiles(){

}
export default App;
