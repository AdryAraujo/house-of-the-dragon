import { useLocation } from "react-router-dom";
import './Personagens.css';
import { PersonagensList } from "./PersonagensList";
import Navbar from "../../components/navbar/Navbar";

export function Personagens() {

    // const location = useLocation();
    // const nome = location.state.name;

    return (
        <div>
            <Navbar/>
            <h1>Personagens em Destaque</h1>
            <PersonagensList />
        </div>
    )
}