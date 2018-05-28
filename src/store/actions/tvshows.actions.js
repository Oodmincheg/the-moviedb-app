import {
	FETCH_TVSHOWS_START,
	ADD_CUSTOM_TVSHOW
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