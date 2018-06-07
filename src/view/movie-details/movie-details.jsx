import React, { Component } from 'react';
import './movie-details.css';
import { connect } from 'react-redux';
import {
	fetchMovies,
	fetchSimilarMovies,
	initializeMyLibrary
} from '../../store/actions';
import { GenresList } from '../../components/genres';
import { getItemFromLocalStorage, setItemToLocalStorage } from '../../services';
import { Recommendation } from '../../components/recommendation';

export class MovieDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			genresFromLS: getItemFromLocalStorage('genres'),
			movie: {}
		};
		this.props.initializeMyLibrary();
	}

	initMovie(id) {
		let currentMovie = getItemFromLocalStorage('fullmovies').filter(movie => movie.id === parseInt(id, 10));
		this.setState(() => ({
			movie: currentMovie[0]
		}));
		setItemToLocalStorage('currentmovie', currentMovie);
	}

	componentDidMount() {
		this.props.fetchSimilarMovies(this.props.match.params.id);
	}

	componentWillMount() {
		this.initMovie(this.props.match.params.id);
	}

	//refreshing movie info after click on recommended movie
	componentWillReceiveProps(nextProps) {
		this.initMovie(nextProps.match.params.id);
	}

	render() {
		let movie = this.state.movie;

		//filter genres of current movie
		let genres = this.state.genresFromLS.filter(genre => movie.genre_ids.includes(genre.id));
		const { similarMovies, isSidebarOpen } = this.props;
		return (
			<div className='mdb-details__view'>
				<div className={isSidebarOpen ?
					'mdb-details__wrapper' :
					'mdb-details__wrapper mdb-details__wrapper--wider'
				}>
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
					<h3 className='mdb-details__recommended-title'>We also recommended</h3>
					<Recommendation items={similarMovies} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.moviesReducer.movies,
		genres: state.genresReducer.genres,
		similarMovies: state.moviesReducer.similarMovies,
		isSidebarOpen: state.sidebarReducer.isSidebarOpen
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchMovies: () => {
			dispatch(fetchMovies());
		},
		fetchSimilarMovies: (id) => {
			dispatch(fetchSimilarMovies(id));
		},
		initializeMyLibrary: () => {
			dispatch(initializeMyLibrary());
		}
	};
};

export const MovieDetailsPage = connect(mapStateToProps, mapDispatchToProps)(MovieDetails);