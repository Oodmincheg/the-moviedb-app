import React, { Component } from 'react';
import './movie-details.css';
import { connect } from 'react-redux';
import { fetchMovies } from '../../store/actions';
import { GenresList } from '../../components/genres';
import { getItemFromLocalStorage } from '../../services';

export class MovieDetails extends Component {
	constructor(props) {
		super(props)
		this.state = {
			genresFromLS: getItemFromLocalStorage('genres'),
			movie: {},
			recommended: []
		}
	}

	initMovieAndRecommended(id) {
		let movies = getItemFromLocalStorage('movies').filter(movie => movie.id === parseInt(id, 10));
		this.setState(() => ({
			movie: movies[0]
		}));
	}

	componentWillMount() {
		this.initMovieAndRecommended(this.props.match.params.id);
	}

	render() {
		let movie = this.state.movie;
		let genres = this.state.genresFromLS.filter(genre => movie.genre_ids.includes(genre.id));
		return (
			<div className='mdb-details__view'>
				<div className='mdb-details__wrapper'>
					<img
						className='mdb-details__backdrop'
						src={movie.backdrop}
						alt={movie.title}
					/>
					<div className='mdb-details__movie-info'>
						<h2 className='mdb-details__title'>{movie.title}</h2>
						<div className='mdb-details__overview'>
							<p className=''>{movie.overview}</p>
							<p>{movie.overview}</p>
							<p>{movie.overview}</p>
							<p>{movie.overview}</p>
						</div>
					</div>
					<p>Genre</p>
					<GenresList compareGenres={genres.map(genre => genre.name)} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.moviesReducer.movies,
		genres: state.genresReducer.genres
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchMovies: () => {
			dispatch(fetchMovies());
		}
	}
}

export const MovieDetailsPage = connect(mapStateToProps, mapDispatchToProps)(MovieDetails);