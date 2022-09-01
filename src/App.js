import "./style/style.css"
import "./style/button.css"
import background from "./seaVid.mp4"
import { Budget } from "./components/Budget.jsx"
import { Workout } from "./components/Workout.jsx"
import { useState } from 'react'



function App() {
  const [isBudgetToggled, setBudgetToggle] = useState(false);
  const [isWorkoutToggled, setWorkoutToggle] = useState(false);
  const [isSettingsToggled, setSettingsToggle] = useState(false);
  return (
    <div>
      <div className="header">
        <video autoPlay loop muted id="video">
          <source src={background} type="video/mp4"></source>
        </video>
        <div className="header-button-container">
          <button onClick={() => { setBudgetToggle(!isBudgetToggled); setWorkoutToggle(false) }} id="Budget" className="button-class">BUDGET</button>
          <button onClick={() => { setWorkoutToggle(!isWorkoutToggled); setBudgetToggle(false) }} id="Workout Log" className="button-class">WORKOUT LOG</button>
          <button onClick={() => setSettingsToggle(!isSettingsToggled)} id="settings" className="button-class">SETTING</button>
        </div >
        <div >
          {isBudgetToggled ? <Budget /> : null}
        </div>
        <div >
          {isWorkoutToggled ? <Workout /> : null}
        </div>
      </div>

      {isWorkoutToggled ?
        <div className="workoutOption">
          <caption className="workoutHeader">Workout Options</caption>
          <div>
            <button className="button-class">RECORD NEW PR</button>
          </div>
          <div>
            <button className="button-class">RECORDING WORKOUT</button>
          </div>
        </div>
        : null
      }
      {isBudgetToggled ?
        <div className="budgetOption">
          <caption className="budgetHeader" >Budget Options</caption>
          <button className="button-class new-entry-button">New Entry</button>
        </div>
        : null
      }
    </div >
  );
}


export default App;
