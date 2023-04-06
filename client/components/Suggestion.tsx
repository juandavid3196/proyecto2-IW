import React from 'react'

const Suggestion = () => {
	return (
		<section className="suggestions-section">
			<div className="suggestions-container">
				<div className="suggestion-item">
					<img src="./img/suggestion-img/payment.svg" alt="" />
					<h6 className="suggestion-title">Paga con tarjeta o en efectivo</h6>
					<span className="suggestion-message">Con Mercado Pago, paga en cuotas y aprovecha la comodidad de financiación
						que te da tu banco, o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!</span>
					<a href="#" className="suggestion-link">Como pagar con mercado pago</a>
				</div>
				<div className="suggestion-item">
					<img src="./img/suggestion-img/shipping.svg.svg" alt="" />
					<h6 className="suggestion-title">Envío gratis desde $ 90.000</h6>
					<span className="suggestion-message">Con solo estar registrado en Mercado Libre, tienes envíos gratis en miles de productos seleccionados.</span>
					<a href="#" className="suggestion-link">Conoce más sobre este beneficio</a>
				</div>
				<div className="suggestion-item">
					<img src="./img/suggestion-img/Compra-protegida.svg" alt="" />
					<h6 className="suggestion-title">Conoce más sobre este beneficio</h6>
					<span className="suggestion-message">¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</span>
					<a href="#" className="suggestion-link">Cómo te protegemos</a>
				</div>
			</div>
		</section>
	)
}

export { Suggestion }