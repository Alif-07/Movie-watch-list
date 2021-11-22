import React from 'react';
import './Movie.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

// import Rating from 'react-rating';

const Movie = (props) => {
	// console.log(props.movie);
	const { img, name, year, releasedDate, language, boxOffice, rating } =
		props.movie;
	const element = <FontAwesomeIcon icon={faVideo} />;
	return (
		<div id="movie-part">
			<div className="w3-container">
				<h2>
					{name}({year})
				</h2>
				<div className="w3-card-4" style={{ width: '50%' }}>
					<img src={img} alt="Alps" style={{ width: '100%' }} />
					<div className="w3-container w3-center mt-2">
						<p>Language: {language}</p>
						<p>Released date: {releasedDate}</p>
						<p>Box office: ${boxOffice}</p>
						<Rating
							initialRating={rating}
							readonly
							emptySymbol="far fa-star icon-color"
							fullSymbol="fas fa-star icon-color"
						></Rating>
						<button
							onClick={() => props.addToCart(props.movie)}
							className="btn btn-danger rounded mt-2"
						>
							{element} Add to watch list
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Movie;
