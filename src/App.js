import './App.css';

function App() {
  
  const setNumbers = () => {

    const numbers = [];

    for (let i = 1; i < 10; i++) {

      numbers.push(
        <button key={i}>{i}</button>
      )
      
    }

    return numbers;

  };


  return (

    <div className="App">
    
      <header className="App-header">

        <a>
          Calculadora Basica
        </a>

        <div className="calculator">

          <div className="display">
          
            <span>(0)</span> 0

          </div>

          <div className="symbols">
          
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>

            <button>AC</button>

          </div>

          <div className="numbers">

            { setNumbers() }

            <button>0</button>
            <button>.</button>
            <button>=</button>
          
          </div>

        </div>

      </header>

    </div>

  );
}

export default App;
