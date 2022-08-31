import "./style/style.css"
import "./style/button.css"
import background from "./seaVid.mp4"
import { Budget } from "./components/Budget.jsx"
import { Workout } from "./components/Workout.jsx"
import {useState} from 'react'



function App() {
  const [isBudgetToggled,setBudgetToggle] = useState(false);
  const [isWorkoutToggled,setWorkoutToggle] = useState(false);
  const [isSettingsToggled,setSettingsToggle] = useState(false);
  return (
<div className="header">
      <video autoPlay loop muted id = "video">
        <source src={background} type = "video/mp4"></source>
      </video>
      <div className= "header-button-container">      
        <button onClick={() => setBudgetToggle(!isBudgetToggled)} id= "Budget" className="button-class">BUDGET</button>
        <button onClick={() => setWorkoutToggle(!isWorkoutToggled)} id= "Workout Log" className="button-class">WORKOUT LOG</button>
        <button onClick={() => setSettingsToggle(!isSettingsToggled)} id= "settings" className="button-class">SETTING</button>
      </div>
      <div>
        {isBudgetToggled ? <Budget/>: null}
        {isWorkoutToggled ? <Workout/>: null}
      </div>
</div>
  );
}


export default App;
