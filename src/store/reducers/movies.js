import {
	FETCH_MOVIES_SUCCESS,
	ADD_CUSTOM_MOVIE
} from '../../constants';

const initialState = {
	movies: [],
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
		default:
			return state;
	}
}