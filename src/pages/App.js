
import './App.css';
import CardPessoa from '../componentes/card/Card';





let nome = 'Michael Jordan';
let idade = 59;

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Componentes</h1>

        <CardPessoa nome= {nome} idade= {idade} estilo= "jordan"/>
      
        
      </header>
    </div>
  );
}

export default App;
