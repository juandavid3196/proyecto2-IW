import React from 'react'

const Market = () => {
	return (
		<section className="market-section margin-40">
			<div className="section-title gap-3.5">
				<h3>Beneficios de Mercado puntos</h3>
				<a href="#">Ver todos los beneficios</a>
			</div>
			<div className="section-container">
				<div className="market-service  img-1">
					<div className="service-container flex">
						<div className="service-img">
							<img src="./img/market-img/comboplus-square.jpg.svg" alt="" />
						</div>
						<div className="service-data">
							<h3>Sin cargo con el nivel 6</h3>
							<span className="service-product">Disney+ y Star+</span>
						</div>
					</div>
				</div>
				<div className="market-service img-2">
					<div className="service-container flex">
						<div className="service-img">
							<img src="./img/market-img/logoSquare@2x.png.svg" alt="" />
						</div>
						<div className="service-data">
							<span className="free-offer">7 DÍAS GRATIS</span>
							<h3>Hasta 50% OFF</h3>
							<span className="service-product">HBO Max</span>
						</div>
					</div>
				</div>
				<div className="market-service img-3">
					<div className="service-container flex">
						<div className="service-img">
							<img src="./img/market-img/paramount-logo-vdp-56-x-56-filled@2x.png.svg" alt="" />
						</div>
						<div className="service-data">
							<span className="free-offer">7 DÍAS GRATIS</span>
							<h3>Hasta 50% OFF</h3>
							<span className="service-product">Paramount+</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export { Market }