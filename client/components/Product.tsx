import React, { useContext } from 'react'
import { CartContext } from '@contexts/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ProductProps {
	id: number;
	name:string;
	img: string;
	price: string;
	discount: string;
	message: string;
	value: boolean;
}

const Product = ({ id, img, price, discount, message, value, name }: ProductProps) => {

	const { addToCart } = useContext(CartContext);

	const handleProduct = () => {
		addToCart({
			id: id,
			name:name,
			img: img,
			price: price,
			discount: discount,
			message: message,
			value: value,
			quantity: 1
		});

		toast.success('addded product successfully', {
			position: toast.POSITION.BOTTOM_RIGHT,
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
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
			<ToastContainer />
		</div>
	)
}

export { Product }