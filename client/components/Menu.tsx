import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

const Menu = () => {
	return (
		<div className="menu-section lg:hidden">
			<div className="menu-container">
				<div className="menu-box">
					<ul>
						<li><HomeOutlinedIcon /><span>Inicio</span></li>
						<li><LocalOfferOutlinedIcon /> <span>Ofertas</span></li>
						<li><AccessTimeOutlinedIcon /> <span>Historial</span></li>
						<li><HeadsetMicOutlinedIcon /> <span>Ayuda / PQR</span></li>
					</ul>
				</div>
				<div className="menu-box">
					<ul>
						<li><LocalMallOutlinedIcon /> <span>Supermercado</span></li>
						<li><CheckroomOutlinedIcon /> <span>Moda</span></li>
						<li><LanguageOutlinedIcon />  <span>Compra Internacional</span></li>
						<li><StorefrontOutlinedIcon /><span>Tiendas oficiales</span></li>
						<li><ListOutlinedIcon /> 			<span>Categorías</span></li>
					</ul>
				</div>
				<div className="menu-box">
					<ul>
						<li><ListAltOutlinedIcon /><span>Resumen</span></li>
						<li><SellOutlinedIcon />   <span>Vender</span></li>
					</ul>
				</div>
				<div className="menu-box">
					<ul>
						<li><DownloadOutlinedIcon /><span>¡Compra y vende con la app!</span></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export { Menu }