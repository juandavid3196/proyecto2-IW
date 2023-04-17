import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Menu } from './Menu';

const Navbar = () => {

  const [openMenu,setOpenMenu] = useState(true); 

  return (
    <>
      <nav className="py-[8px] lg:px-[40px]">
        <div className="nav-container flex items-center justify-between gap-[10px]">
          <div className='nav-left flex items-center w-[80%]'>
            <img src="./img/header-img/small-logo.png" className="nav-small-icon lg:hidden" alt="" />
            <img src="./img/header-img/a.svg" alt="" className="company-icon hidden lg:block" />
            <input type="text" className="search-bar w-full lg:w-[600px]" placeholder="Buscar productos, marcas y más..." />
          </div>
          <div className='nav-right flex items-center'>
            <div className='icon-container lg:hidden'>
              <button onClick={()=> setOpenMenu(!openMenu)}>
               {openMenu ? (<MenuIcon />) : (<CloseOutlinedIcon />)} 
              </button>
            </div>
            <div className='icon-container'>
              <ShoppingCartOutlinedIcon />
            </div>
          </div>
        </div>
        <div className="nav-container justify-between items-center hidden lg:flex">
          <div className="flex">
            <span className="w-[182px]">Ingresa tu domicilio</span>
            <ul className="services-list lg:gap-[5px] xl:gap-[20px]">
              <li className="w-max flex" >Categorias &nbsp;<img src="./img/header-img/pseudo.svg" alt="" /></li>
              <li>Ofertas</li>
              <li>Historial</li>
              <li>Supermercado</li>
              <li>Moda</li>
              <li>Vender</li>
              <li>Ayuda / PQR</li>
            </ul>
          </div>
          <ul className="services-list lg:gap-[5px] xl:gap-[20px]">
            <li className="text-black"><span>Crea tu cuenta</span></li>
            <li className="text-black"><span>Ingresa</span></li>
            <li className="text-black"><span>Mis compras</span></li>
          </ul>
        </div>
      </nav>
      {!openMenu && <Menu />}
    </>
  );
};

export { Navbar }