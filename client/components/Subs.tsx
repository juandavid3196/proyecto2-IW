import React from 'react'

const Subs = () => {
	return (
		<section className="subs-section margin-40">
			<div className="section-container">
				<div className="subs-card w-full">
					<div className="subs-title flex justify-between items-center">
						<span>Suscríbete al nivel 6</span>
						<div className="subs-offer flex flex-col">
							<span>$ 50.690</span>
							<span>$ 17.899 <span className="subs-month">/mes</span></span>
						</div>
					</div>
					<div className="subs-sentence">
						Consigue los mejores beneficios en Mercado Libre
					</div>
					<div className="subs-info flex justify-between flex-col lg:flex-row">
						<div className="info-box">
							<div className="subs-circle-img">
								<img src="./img/subs-img/dplus.svg" alt="" />
							</div>
							<span>Disney+ sin cargo</span>
						</div>
						<div className="info-box">
							<div className="subs-circle-img">
								<img src="./img/subs-img/starplus.svg" alt="" />
							</div>
							<span>Star+ sin cargo</span>
						</div>
						<div className="info-box">
							<div className="subs-circle-img">
								<img src="./img/subs-img/truckgiftv4@2x.png" alt="" />
							</div>
							<span className="box-message">Envios rápidos y gratis desde <br />$ 90.000 y 40% OFF en envíos de <br />menos de $ 90.000</span>
						</div>
					</div>
					<div className="subs-button flex items-center flex-end  justify-end">
						<button className="btn">Suscríbete</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export { Subs }