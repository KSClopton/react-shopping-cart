import React, {useContext} from 'react';
import {BookContext} from '../BookContext'

const Item = props => {
	const [products, cart, setCart] = useContext(BookContext);
	console.log(props.id)
	console.log(cart)
	const removeItem = book => {
		
		// add the given item to the cart
		setCart(cart.filter(item => (
			item.id !== book)))
		
	};
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => removeItem(props.id)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
