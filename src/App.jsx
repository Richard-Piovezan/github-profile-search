import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <div className="formSearch">
        <h2>Insira o nome do usuário:</h2>
        <input type="text" onBlur={(e => setNomeUsuario(e.target.value))} placeholder="richard-piovezan"/>
        <img src="https://img.icons8.com/m_rounded/512/FA5252/github.png" alt="GitHub icon" />
      </div>


      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
      
      {/* {formularioVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">Toggle Form</button> */}
    </>
  )
}

export default App
