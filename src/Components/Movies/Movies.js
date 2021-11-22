import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Movie from './Movie/Movie';
import './Movies.css';

const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [cart, setCart] = useState([]);
	useEffect(() => {
		fetch(`./movies.json`)
			.then((res) => res.json())
			.then((data) => setMovies(data));
	}, []);
	const addToCart = (movie) => {
		const newCart = [...cart, movie];
		setCart(newCart);
	};
	return (
		<div className="container">
			<div id="movies-main">
				<div id="movie-display">
					{movies.map((movie) => (
						<Movie key={movie.id} movie={movie} addToCart={addToCart} />
					))}
				</div>
				<div id="movie-cart">
					<Cart cart={cart} />
				</div>
			</div>
		</div>
	);
};

export default Movies;
