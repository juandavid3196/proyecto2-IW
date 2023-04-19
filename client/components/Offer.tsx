import React from 'react'
import { Product } from '@components/Product';

const Offer = () => {

	interface ProductsItem {
		id: number;
		img: string;
		price: string;
		discount: string;
		message: string;
		value: boolean;
	}

	const products : ProductsItem[] = [
		{
			id: 1,
			img: './img/offer-img/silla.svg',
			price: '210.900',
			discount: '32',
			message: 'Envío gratis',
			value: true
		},
		{
			id: 2,
			img: './img/offer-img/soporte-micro.svg',
			price: '74.990',
			discount: '25',
			message: 'Envío gratis',
			value: true
		},
		{
			id: 3,
			img: './img/offer-img/afeitadora.svg',
			price: '134.950',
			discount: '50',
			message: 'Envío gratis',
			value: true
		},
		{
			id: 4,
			img: './img/offer-img/closet.svg',
			price: '149.900',
			discount: '30',
			message: 'Envío gratis',
			value: true
		},
		{
			id: 5,
			img: './img/offer-img/cortina.svg',
			price: '69.990',
			discount: '17',
			message: 'false',
			value: true
		},
	];

	return (
		<section className="offer-section">
			<div className="section-title gap-3.5">
				<h3>Ofertas</h3>
				<a href="#">Ver todas</a>
			</div>
			<div className="section-container">
				{
					products?.map((item)=>(
					<Product
						key={item.id}
						id={item.id}
						img={item.img}
						price={item.price}
						discount={item.discount}
						message={item.message}
						value={item.value}
					/>
					))
				}
			</div>
		</section>
	)
}

export { Offer }