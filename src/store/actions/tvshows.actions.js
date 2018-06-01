import {
	FETCH_TVSHOWS_START,
	ADD_CUSTOM_TVSHOW,
	GET_SIMILAR_TVSHOWS_START
} from '../../constants';

export function fetchTvShows() {
	return {
		type: FETCH_TVSHOWS_START
	};
}

export function addCustomTvshow(payload) {
	return {
		type: ADD_CUSTOM_TVSHOW,
		payload
	};
}

export function fetchSimilarTvShows(payload) {
	return {
		type: GET_SIMILAR_TVSHOWS_START,
		payload
	};
}