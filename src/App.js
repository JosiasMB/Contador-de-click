import "./App.css";
import Boton from "./componentes/boton";
import Contador from "./componentes/Contador";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);
  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <h1>Contador de Clics</h1>
      <h6>Prueba que tan lejos puedes llegar!...</h6>
      <Contador numClics={numClics} />
      <div className="botones">
        <Boton texto="Click" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClic={reiniciarContador}
        />
      </div>
      <div>
        <span>© Josias Matos Batista</span>
      </div>
    </div>
  );
}

export default App;
