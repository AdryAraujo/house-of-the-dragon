import { useLocation } from "react-router-dom";
import './Personagens.css';

export function Personagens(){

    const location = useLocation();
    const nome = location.state.name;

    return(
        <h1>tetete</h1>
    )
}