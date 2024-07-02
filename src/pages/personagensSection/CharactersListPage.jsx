import { useLocation } from "react-router-dom";
import './Characters.css';
import Navbar from "../../components/navbar/Navbar";
import { CharactersList } from "./CharactersList";

export function CharactersListPage() {

    // const location = useLocation();
    // const nome = location.state.name;

    return (
        <div>
            <Navbar/>
            <h1 id="tittle">Personagens em Destaque</h1>
            <CharactersList />
        </div>
    )
}