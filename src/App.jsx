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
            <span>Quem merece o Trono de Ferro? </span>
          </h1>
          <span className="container-buttons">
            <button id="button-black">Time Preto</button>
            <button id="button-green">Time Verde</button>
          </span>
        </div>
        <img src={logoGreen} alt="" />
      </div>

      {/* secção de personagens */}
      <div>
        
      </div>

    </div>
  );
}

export default App;
