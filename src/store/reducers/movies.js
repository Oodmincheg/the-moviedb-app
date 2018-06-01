import {
	FETCH_MOVIES_SUCCESS,
	ADD_CUSTOM_MOVIE,
	GET_SIMILAR_MOVIES_SUCCESS
} from '../../constants';

const initialState = {
	movies: [],
	similarMovies: [],
	isLoaded: false
};

export function moviesReducer(state = initialState, { type, payload }) {
	switch (type) {
		case FETCH_MOVIES_SUCCESS:
			return {
				...state,
				movies: payload,
				isLoaded: true
			};
		case ADD_CUSTOM_MOVIE:
			return {
				...state,
				movies: [...state.movies, payload]
			};
		case GET_SIMILAR_MOVIES_SUCCESS:
			return {
				...state,
				similarMovies: payload
			};
		default:
			return state;
	}
}