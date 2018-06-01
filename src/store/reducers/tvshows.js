import {
	FETCH_TVSHOWS_SUCCESS,
	ADD_CUSTOM_TVSHOW,
	GET_SIMILAR_TVSHOWS_SUCCESS
} from '../../constants';

const initialState = {
	tvShows: [],
	similarTvShows: [],
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
		case GET_SIMILAR_TVSHOWS_SUCCESS:
			return {
				...state,
				similarTvShows: payload
			};
		default:
			return state;
	}
}