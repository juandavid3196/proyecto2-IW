import React from 'react'

interface ProductProps {
	img: string;
	price: string;
	discount: string;
	message: string;
	value: boolean;
}

const Product = ({ img, price, discount, message, value }: ProductProps) => {

	return (
		<div className="offer-product">
			<div className="offer-img">
				<img src={img} alt="" />
			</div>
			<div className="offer-info">
				<span className="offer-price">$ {price}&nbsp;<span className="offer-off">{discount}% OFF</span></span>
				{value ? (<span className="offer-sending">{message}</span>) : (<img src="./img/offer-img/full.svg" className="offer-full" alt="" />)}

			</div>
		</div>
	)
}

export { Product }