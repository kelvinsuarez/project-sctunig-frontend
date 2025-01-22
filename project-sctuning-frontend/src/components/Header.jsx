import Logo from "../images/logo/sctuning.png";

function Header() {
    return(
        <header className="header">
            <img className="header__logo" src={Logo} alt="Logo Sctuning"/>
            <h1>welcome to SCtuning</h1>
            <p className="header__text">
                Aquí se está construyendo proximamete
                la pagina oficial de Sctuning!!
            </p>
        </header>
    )
}

export default Header;