import imageSrProgranomo from "./img/logonegro.jpg";
import "./App.css";
import React from "react";
import { useState } from "react";
import Repositories from "./component/Repositories";

function App() {
  const [repositories, setRepositories] = useState(null);
  const misproyectos = async () => {
    const api = await fetch(
      "$ curl -u https://api.github.com/proyectosaruiz/repositories"
    );
    const repositorieApi = await api.json;
    console.log(repositorieApi);
    setRepositories(repositorieApi.results);
    console.log(api);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Mis Proyectos</h1>
        {repositories ? (
          <Repositories repositories={repositories} />
        ) : (
          <>
            <img
              src={imageSrProgranomo}
              alt="srprogranomo"
              className="img-home"
            />
            <button onClick={misproyectos} className="btn-search">
              Trabajos JavaScript
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;

// 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
