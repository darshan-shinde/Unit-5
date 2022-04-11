import './App.css';
import{useState} from "react"

function App() {
  const [score,setscore] = useState({
    Score:90,
    Wicket: 2,
    Ball: 50,
  })

  function changeScore(value){
      return setscore({
    Score: score.Score + value,
    Wicket: score.Wicket,
    Ball: score.Ball,
      });
  }
  
  function changeWicket(value){
    return setscore({
  Score: score.Score,
  Wicket: score.Wicket + value,
  Ball: score.Ball,
    });
}
  
function changeBall(value){
  return setscore({
Score: score.Score,
Wicket: score.Wicket ,
Ball: score.Ball + value,
  });
}
 
if(score.Wicket>12){
  score.Wicket = 0;
}
// if(score.Ball>6){
//   score.Ball++
// }


  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:
          <h1 className="scoreCount">
            {
              score.Score
            }
          </h1>
        </div>
        <div>
          Wicket:
          <h1 className="wicketCount">
            {
             score.Wicket
            }
          </h1>
        </div>

        <div>
          Over:
          <h1 className="overCount">
            {
              score.Ball
            }
          </h1>
        </div>
      </div>
      <br></br>
      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => {
          changeScore(1)
        }}>Add 1</button>
        <button className="addScore4" onClick={() => {
          changeScore(4)
        }}>Add 4</button>
        <button className="addScore6" onClick={() => {
          changeScore(6)
        }}>Add 6</button>
      </div>
      <br></br>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() => {
           changeWicket(1)
        }}>Add 1 wicket</button>
      </div>
      <br></br>
      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() => {
          changeBall(1)
        }}>Add 1</button>
      </div>
      <h1 className="status">
      {score.Score > 100  ? "India Won" : ""}
        
      </h1>
     
       
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
