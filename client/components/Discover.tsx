import React from 'react'

const Discover = () => {
	return (
		<section className="discover-section margin-40">
			<div className="section-title">
				<h3>Descubre</h3>
			</div>
			<div className="section-container">
				<div className="discover-offer">
					<div className="discover-info">
						<span className="info-ad">RENUEVA TUS ESPACIOS</span>
						<span className="info-products">HOGAR Y MUEBLES HASTA 50% OFF</span>
						<button className="btn-discover w-1/2">Ver más</button>
					</div>
					<div className="discover-img">
						<img src="./img/discover-img/image-2.svg" alt="" />
					</div>
				</div>
				<div className="discover-offer">
					<div className="discover-info">
						<span className="info-ad">SUSCRÍBETE AL NIVEL 6</span>
						<span className="info-products">POR SOLO $17.899 CADA MES</span>
						<button className="btn-discover w-1/2">Suscribirme</button>
					</div>
					<div className="discover-img">
						<img src="./img/discover-img/image-1.svg" alt="" />
					</div>
				</div>
			</div>
		</section>
	)
}

export { Discover }