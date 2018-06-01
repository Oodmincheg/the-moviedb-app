import {
	FETCH_MOVIES_START,
	FETCH_MOVIES_SUCCESS,
	FETCH_MOVIES_FAILURE,
	GET_SIMILAR_MOVIES_START,
	GET_SIMILAR_MOVIES_SUCCESS,
	GET_SIMILAR_MOVIES_FAILURE,
	popularMovies
} from '../../constants';
import {
	getData,
	MovieEntity,
	setItemToLocalStorage,
	getItemFromLocalStorage,
	getSimilarMovies
} from '../../services';

export const moviesMiddleware = store => next => action => {
	if (action.type === FETCH_MOVIES_START) {
		let moviesFromLS = getItemFromLocalStorage('movies');
		if (!moviesFromLS) {
			try {
				getData(popularMovies).then((result) => {
					let arr = result;
					let movies = arr.map((item) => {
						return new MovieEntity(item); //mapping
					});
					let data = movies;
					let customMovies = getItemFromLocalStorage('addedMovies');
					if (customMovies) {
						data = movies.concat(customMovies);
					}
					setItemToLocalStorage('movies', data);
					store.dispatch({
						type: FETCH_MOVIES_SUCCESS,
						payload: data
					});
				});
			} catch (err) {
				store.dispatch({
					type: FETCH_MOVIES_FAILURE,
					payload: err,
					error: true
				});
			}

		} else {
			let moviesLS = getItemFromLocalStorage('movies');
			let movies = moviesLS || JSON.parse(moviesLS);

			store.dispatch({
				type: FETCH_MOVIES_SUCCESS,
				payload: movies
			});
		}
	}

	if (action.type === GET_SIMILAR_MOVIES_START) {
		try {
			getSimilarMovies(action.payload).then((result) => {
				let resultArr = result;
				let similarMovies = resultArr.map((item) => {
					return new MovieEntity(item);
				});
				store.dispatch({
					type: GET_SIMILAR_MOVIES_SUCCESS,
					payload: similarMovies
				});
				let initialMovies = getItemFromLocalStorage('movies');
				let fullMovies = [...initialMovies, ...similarMovies];
				setItemToLocalStorage('fullmovies', fullMovies);
			});
		} catch (err) {
			store.dispatch({
				type: GET_SIMILAR_MOVIES_FAILURE,
				payload: err
			});
		}
	}
	return next(action);
};