import {
	FETCH_TVSHOWS_SUCCESS,
	ADD_CUSTOM_TVSHOW
} from '../../constants';

const initialState = {
	tvShows: [],
	isLoaded: false
};

export function tvShowsReducer(state = initialState, { type, payload }) {
	switch (type) {
		case FETCH_TVSHOWS_SUCCESS:
			return {
				...state,
				tvShows: payload,
				isLoaded: true
			};
		case ADD_CUSTOM_TVSHOW:
			return {
				...state,
				tvShows: [...state.tvShows, payload]
			};
		default:
			return state;
	}
}