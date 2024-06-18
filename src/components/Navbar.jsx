import { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
            <nav className="navbar-image">
                <div className='navbar-options'>
                    {/* <button
                        className="menu"
                        onClick={() => setMenuOpen(!menuOpen)}>
                        <FaBars className='menu-icon' />
                    </button> */}
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
                </div>

            </nav>
        </div>
    )
}

export default Navbar;