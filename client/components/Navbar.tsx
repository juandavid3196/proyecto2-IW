
const Navbar = () => {
  return (
    <nav>
      <div className="nav-container items-center">
        <img src="./img/header-img/a.svg" alt="" className="company-icon" />
        <input type="text" className="search-bar" placeholder="Buscar productos, marcas y más..." />
      </div>
      <div className="nav-container justify-between items-center">
        <span>Ingresa tu domicilio</span>
        <ul className="services-list">
          <li className="w-max flex" >Categorias &nbsp;<img src="./img/header-img/pseudo.svg" alt=""/></li>
          <li>Ofertas</li>
          <li>Historial</li>
          <li>Supermercado</li>
          <li>Moda</li>
          <li>Vender</li>
          <li>Ayuda / PQR</li>
        </ul>
        <ul className="services-list">
          <li className="text-black"><span>Crea tu cuenta</span></li>
          <li className="text-black"><span>Ingresa</span></li>
          <li className="text-black"><span>Mis compras</span></li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar }