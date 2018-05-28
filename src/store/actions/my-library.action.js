import {
	INITIALIZE_MY_LIBRARY,
	ADD_MOVIE_TO_LIBRARY,
	REMOVE_MOVIE_FROM_LIBRARY,
	ADD_TVSHOW_TO_LIBRARY,
	REMOVE_TVSHOW_FROM_LIBRARY
} from '../../constants';

export function initializeMyLibrary() {
	return {
		type: INITIALIZE_MY_LIBRARY
	};
}

export function addMovieToLibrary(payload) {
	return {
		type: ADD_MOVIE_TO_LIBRARY,
		payload
	};
}

export function removeMovieFromLibrary(payload) {
	return {
		type: REMOVE_MOVIE_FROM_LIBRARY,
		payload
	};
}

export function addTvShowToLibrary(payload) {
	return {
		type: ADD_TVSHOW_TO_LIBRARY,
		payload
	};
}


export function removeTvShowFromLibrary(payload) {
	return {
		type: REMOVE_TVSHOW_FROM_LIBRARY,
		payload
	};
}