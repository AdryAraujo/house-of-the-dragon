import { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logoTargaryen.png'


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="navbar-image">
            <nav className='navbar-options'>
                <img src={logo} alt="" />
                <button
                    className="menu"
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <FaBars className='menu-icon' />
                </button>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <a href="/">Início</a>
                    </li>
                    <li>
                        <a href="/">Personagens</a>
                    </li>
                    <li>
                        <a href="/">Resumo</a>
                    </li>
                    <li>
                        <a href="/">Dragões</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar;