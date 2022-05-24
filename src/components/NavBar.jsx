import "./NavBar.css"

function NavBar() {
    return (
      <div className="navBar">
        <div className="menu">
          <a href="" className="home">SuperTienda</a>
          <ul className="links">
              <li><a href="">Bazar</a></li>
              <li><a href="">Decoración</a></li>
              <li><a href="">Cocina</a></li>
          </ul>
          <a href="" className="login">Iniciar Sesión</a>
        </div>
      </div>
    );
  }
  
  export default NavBar;