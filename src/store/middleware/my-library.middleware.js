import {
	ADD_MOVIE_TO_LIBRARY,
	REMOVE_MOVIE_FROM_LIBRARY,
	ADD_TVSHOW_TO_LIBRARY,
	REMOVE_TVSHOW_FROM_LIBRARY
} from '../../constants';
import {
	getItemFromLocalStorage,
	setItemToLocalStorage
} from '../../services';

export const myLibraryMiddleware = store => next => action => {
	if (action.type === ADD_MOVIE_TO_LIBRARY) {
		let moviesFromLS = getItemFromLocalStorage('movies') || [];
		let updatedMovies = moviesFromLS.map(item => {
			if (item.id === action.payload.id) {
				item.isInLibrary = true;
			}
			return item;
		});
		setItemToLocalStorage('movies', updatedMovies);
	}

	if (action.type === REMOVE_MOVIE_FROM_LIBRARY) {
		let currentMoviesFromLS = getItemFromLocalStorage('movies') || [];
		let updatedMoviesAfterDeleting = currentMoviesFromLS.map(item => {
			if (item.id === action.payload.id) {
				item.isInLibrary = false;
			}
			return item;
		});
		setItemToLocalStorage('movies', updatedMoviesAfterDeleting);
	}

	if (action.type === ADD_TVSHOW_TO_LIBRARY) {
		let tvShowsFromLS = getItemFromLocalStorage('tvShows') || [];
		let updatedTvShows = tvShowsFromLS.map(item => {
			if (item.id === action.payload.id) {
				item.isInLibrary = true;
			}
			return item;
		});
		setItemToLocalStorage('tvShows', updatedTvShows);
	}

	if (action.type === REMOVE_TVSHOW_FROM_LIBRARY) {
		let currentTvShowsFromLS = getItemFromLocalStorage('tvShows') || [];
		let updatedTvShowsAfterDeleting = currentTvShowsFromLS.map(item => {
			if (item.id === action.payload.id) {
				item.isInLibrary = false;
			}
			return item;
		});
		setItemToLocalStorage('tvShows', updatedTvShowsAfterDeleting);
	}

	return next(action);
}