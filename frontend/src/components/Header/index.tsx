import logo from '../../assets/img/logo.svg'
import './style.css'

function Header() {
    return (
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DevVendas</h1>
            <p>
              Desenvolvido por
              <a href="https://www.instagram.com/leonascimento_n/"> @leonascimento_n</a>
            </p>
        </div>
    </header>
  
    )
}


export default Header;