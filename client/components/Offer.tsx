import React from 'react'
import { Product } from '@components/Product';
import {products} from '@utils/data';

const Offer = () => {

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