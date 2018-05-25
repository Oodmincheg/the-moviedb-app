import { GET_GENRES_SUCCESS } from '../../constants';

const initialState = {
	genres: []
}

export function genresReducer(state = initialState, { type, payload }) {
	switch (type) {
		case GET_GENRES_SUCCESS:
			return {
				...state,
				genres: payload
			}
		default:
			return state;
	}
}