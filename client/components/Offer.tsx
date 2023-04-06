import React from 'react'
import { Product } from '@components/Product';

const Offer = () => {
	return (
		<section className="offer-section">
			<div className="section-title gap-3.5">
				<h3>Ofertas</h3>
				<a href="#">Ver todas</a>
			</div>
			<div className="section-container">
				<Product
					img='./img/offer-img/silla.svg'
					price='210.900'
					discount='32'
					message='Envío gratis'
					value={true}
				/>
				<Product
					img='./img/offer-img/soporte-micro.svg'
					price='74.990'
					discount='25'
					message='Envío gratis'
					value={true}
				/>
				<Product
					img='./img/offer-img/afeitadora.svg'
					price='134.950'
					discount='50'
					message='Envío gratis'
					value={true}
				/>
				<Product
					img='./img/offer-img/closet.svg'
					price='149.900'
					discount='30'
					message='Envío gratis'
					value={true}
				/>
				<Product
					img='./img/offer-img/cortina.svg'
					price='69.990'
					discount='17'
					message='Envío gratis'
					value={false}
				/>
			</div>
		</section>
	)
}

export { Offer }