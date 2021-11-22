import React from 'react';
import './Cart.css';

const Cart = (props) => {
	const { cart } = props;
	let movieDuration = 0;
	for (const movie of cart) {
		movieDuration = movieDuration + movie.duration;
	}

	return (
		<div id="cart">
			<h3>Movie watchlist</h3>
			<h5>Movie selected: {props.cart.length}</h5>
			<p>Movies you want to watch</p>
			<ul>
				{cart.map((list, i) => (
					<b>
						<li className="text-dark py-2" key={i}>
							{list.name}
							<br />
							Based-on: {list.basedOn}
						</li>
					</b>
				))}
			</ul>
			<p>Movie Duration: {movieDuration} minutes</p>
		</div>
	);
};

export default Cart;
