import { useState } from "react";

function App() {

  let [calc, setCalc] = useState("");
  let [result, setResult] = useState("");

  let ops = ['/', '*', '+', '-', '.'];

  const updateCalc = (value) => {

    if (

      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
      
    ) {
      return;
    }

    setCalc = (calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }

  }
  
  const createDigits = () => {

    const digits = [];

    for (let i = 1; i < 10; i++) {

      digits.push(

        <button 
          onClick={() => updateCalc(i.toString())} 
          key={i}>
          {i}
        </button>

      )
      
    }

    return digits;

  };

  let calculate = () => {

    setCalc(eval(calc).toString());

  }

  let deleteLast = () => {

    if (calc === '') {
      return;
    }

    let value = calc.slice(0, -1);

    setCalc(value);

    if (ops.includes(value.slice(-1))) {
      setResult(eval(value.toString().slice(0,-1)));  
    }
    else{
      setResult(eval(value.toString()));  
    }

  }


  return (

    <div className="App">

        <div>

          <h1>Calculadora Basica</h1>
          <br></br>

          <div className="calculator">

            <div className="display">
              {result ? <span>({result})</span> : '' }&nbsp;
              { calc || "0" }
            </div>

          <div className="symbols">
          
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('/')}>/</button>

            <button onClick={deleteLast}>AC</button>

          </div>

          <div className="digits">

            { createDigits() }

            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>

            <button onClick={calculate}>=</button>
          
          </div>

        </div>

        </div>

        

    </div>

  );
}

export default App;
