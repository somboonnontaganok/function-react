import { useState } from "react";
// import ReactDOM from "react-dom/client";

const  App = () => {
  const [color, setColor] = useState();
  let DivElement = <div></div>

  if( color == "yellow") {
        DivElement = <div>{color}</div>;
  }

  else if (color == "blue") {
        DivElement = <div>{color}</div>;
  }

  else if (color == "pink") {
    DivElement = <div>{color}</div>;
  }

  return (
    <>
      <h3>{DivElement}</h3>  
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("yellow")}
      >Show Yellow</button>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Show Blue</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Show Pink</button>
    </>
  )
}


export default App;
   