import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {BookContext} from '../BookContext'
import styled from 'styled-components'

const Navigation = () => {
	const {cart} = useContext(BookContext);
	// console.log(cart)
	// const [products] = useContext(BookContext)
	
	return (
		<div className="navigation">
		
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
