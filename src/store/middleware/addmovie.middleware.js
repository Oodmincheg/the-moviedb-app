import {
	ADD_CUSTOM_MOVIE,
	CLOSE_FORM
} from '../../constants';
import {
	setItemToLocalStorage,
	getItemFromLocalStorage
} from '../../services';

export const addMovieMiddleware = store => next => action => {
	if (action.type === ADD_CUSTOM_MOVIE) {
		let addedMovies = getItemFromLocalStorage('addedMovies') || [];
		let movies = getItemFromLocalStorage('movies');
		action.payload.movie = true;
		addedMovies.push(action.payload);
		let updatedMovies = movies.concat(addedMovies);
		setItemToLocalStorage('movies', updatedMovies);
		setItemToLocalStorage('addedMovies', addedMovies);
		store.dispatch({
			type: CLOSE_FORM
		});
	}
	return next(action);
}