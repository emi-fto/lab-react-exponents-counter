import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";

import { useState } from "react";


function App () {
  const [count, setCount] = useState(0);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} decrement={decrement} increment={increment} />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <ExponentTwo count={count} countPow2={count **2}/>
        <ExponentThree count={count} countPow3={count **3}/>
        <ExponentFour count={count} countPow4={count **4}/>
        <ExponentFive count={count} countPow5={count **5}/>
        <ExponentSix count={count} countPow6={count **6}/>
      </div>
    </div>
  );
}

export default App;
