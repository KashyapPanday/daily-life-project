import "./style/style.css"
import "./style/button.css"
import background from "./seaVid.mp4"

const budgetCategories = ["Gas","Primerica","Shopping","Restaurant","Lunch","Fun","Parents","Student Loans","Bike Fund",];


function App() {
  return (
<div className="header">
      <video autoPlay loop muted id = "video">
        <source src={background} type = "video/mp4"></source>
      </video>
      <div className= "header-button-container">      
        <button onClick={() => sayHello("Budget")} id= "Budget" className="button-class">BUDGET</button>
        <button onClick={() => sayHello("working out logs")} id= "Workout Log" className="button-class">WORKOUT LOG</button>
        <button onClick={() => sayHello("settings")} id= "settings" className="button-class">SETTING</button>
      </div>
</div>
  );
}


function sayHello(val) {

if(val === "Budget"){
  console.log("Hello");
  return (<td className="budget-pop-up">
    {budgetCategories.forEach(category=>(
    <li>{category}</li>
    ))}
  </td>)
}
}

export default App;
