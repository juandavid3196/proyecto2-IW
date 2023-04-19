import React, { useContext } from 'react'
import { CartContext } from '@contexts/CartContext';

interface ProductProps {
	id:number;
	img: string;
	price: string;
	discount: string;
	message: string;
	value: boolean;
}

const Product = ({ id,img, price, discount, message, value }: ProductProps) => {

	const {addToCart} = useContext(CartContext);

	const handleProduct = () => {
		addToCart({
			id:id,
			img: img,
			price:price,
			discount :discount,
			message:message,
			value:value,
			quantity: 1
		})
	}

	return (
		<div className="offer-product" onClick={handleProduct}>
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