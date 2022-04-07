
import './App.css';

function App() {
 const systems = ["Android","Blackberry","iPhone","Windows Phone"];
 const opr = ["Samsung","HTC","Micromax","Apple"]
 const middle = ["Sevices","Projects","About"]
 return(
   <div className="App">
     <div id="nav">
          <p>LOGOBAKERY</p>
        <div class="middle">
          {middle.map((e) => {
          return <p>{e}</p>
          })}
        </div>
        <button>Contact</button>
     </div>
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

export default App;
