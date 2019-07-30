import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// element with jsx<button onClick={iniciarJogo}> Iniciar Novamente! </button>
const element = <h2> Olá Smith</h2>;

// element with outjsx
const elementWithOutJsx = React.createElement(
  "div",
  null,
  React.createElement("h2", null, "Olá DevPleno!!!")
);

const MostrarI = props => {
  return <p>{props.i}</p>;
};

// component
function App(props) {
  const [i, setI] = useState(1);
  const [estado, setEstado] = useState("ENTRADA");
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const increment = () => {
    setI(i + 1);
  };
  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <p>
        Acertou o número {palpite} com número de palpites {numPalpites} Fim!
        <br />
        <button onClick={iniciarJogo}> Iniciar Novamente! </button>
      </p>
    );
  }
  if (estado === "ENTRADA") {
    // ENTRADA, RODANDO, FIM
    // 0 => 300
    // Palpites que a maquina deu
    return <button onClick={iniciarJogo}>Comecar a jogar!</button>;
  }

  return (
    <div className="App">
      {/* <h1>
        Hello {props.name} {i}
      </h1>
      <button onClick={increment}>Increment</button>
      <MostrarI i={i} />

      <h2>Start editing to see some magic happen!</h2>
      {element}
      {elementWithOutJsx}
      <br /> */}

      <div>
        <p>O seu número é {palpite}?</p>
        <p>
          Min: {min} / Max: {max}
        </p>
        <button onClick={menor}>Menor</button>
        <button onClick={acertou}>Acertou</button>
        <button onClick={maior}>Maior</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="devPleno" />, rootElement);
