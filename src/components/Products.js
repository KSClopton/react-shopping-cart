import React, { useState , useContext } from 'react';
import { BookContext } from '../BookContext'

// Components
import Product from './Product';

const Products = () => {
	const [products, cart, setCart] = useContext(BookContext);
	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
