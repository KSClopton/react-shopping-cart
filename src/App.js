import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { BookProvider } from './BookContext'

function App() {
	
	return (
	<BookProvider>
		<div className="App">
			<Navigation />
			<Route exact path="/">
				<Products />
			</Route>
			<Route path="/cart">
				<ShoppingCart />
			</Route>
		</div>
	</BookProvider>
	);
}

export default App;
