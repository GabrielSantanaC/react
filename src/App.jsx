import React, { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <Header title="Aplicação 1" subtitle="Aprendendo o conceito de props">
          Teste children
      </Header>

      <Header title="Aplicação 2" subtitle="Aprendendo o conceito de State">
          State App
      </Header>

      <h1>{`Meu número é ${contador}`}</h1>
      <div>
        <button
          onClick={() => {setContador(contador - 1);}}type="button">Subtrair</button>
        <button onClick={() => {setContador(contador + 1);}}type="button">Adicionar</button>
      </div>
    </div>
  );
};

export default App;
