import Navbar from "./components/Navbar";
import './App.css';
import logoRed from './assets/vermelha-oficial-removebg-preview.png';
import logoGreen from './assets/verde-oficial-removebg-preview.png';

function App() {
  return (
    <div className="app">
      <Navbar />

      {/* secção de escolha de time */}

      <div className="container-time">
        <img src={logoRed} alt="" />
        <div className="content-time">
          <h1>Escolha o seu lado!<br />
            Quem merece o Trono de Ferro?
          </h1>
          <span className="container-buttons">
            <button id="button-black">Time Preto</button>
            <button id="button-green">Time Verde</button>
          </span>
        </div>
        <img src={logoGreen} alt="" />
      </div>

      {/* secção de personagens */}
      {/* secção do mapa */}
      <div className="container-mapa">
        <div className="content-mapa">
          <h2>Fogo e Sangue</h2>
          <p>
            Neste Domingo, dia 16 de Junho, foi ao ar o 1° episódio da 2° temporada da série, tendo 1hr e 8min. Com o título “Um filho por um filho”, explora os temas de luto, raiva, vingança e manipulação, tendo cenas com atuações geniais, além do surgimento de novos persongens, bem como mais aprofundamento nos já existentes.
          </p>
          <button id="button-red">Saiba Mais</button>
        </div>
      </div>

    </div>
  );
}

export default App;
