import { useNavigate } from "react-router-dom";
import Logo from "../images/logo/sctuning.png";


function Header() {
    const navigate = useNavigate();
    return(
        <header className="header">
            <img className="header__logo" src={Logo} alt="Logo Sctuning"/>
            <div className="header__container">
                <h1 className="header__title">Bienvenido a SCtuning</h1>
                <h2 className="header__subtitle">El toque final de tu proyecto!</h2>
            </div>
            <nav className="nav">
                <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/catalog')}>Catálogo</li>
                    <li onClick={() => navigate('/gallery')}>Galería</li>
                    <li onClick={() => navigate('/info')}>Información</li>
                    <li onClick={() => navigate('/contacto')}>Contacto</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;