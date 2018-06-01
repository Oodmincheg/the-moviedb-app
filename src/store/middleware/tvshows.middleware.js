import {
	FETCH_TVSHOWS_START,
	FETCH_TVSHOWS_SUCCESS,
	FETCH_TVSHOWS_FAILURE,
	popularTvShows,
	GET_SIMILAR_TVSHOWS_START,
	GET_SIMILAR_TVSHOWS_SUCCESS,
	GET_SIMILAR_TVSHOWS_FAILURE
} from '../../constants';
import {
	getData,
	TvShowEntity,
	getItemFromLocalStorage,
	setItemToLocalStorage,
	getSimilarTvShows
} from '../../services';

export const tvShowsMiddleware = store => next => action => {
	if (action.type === FETCH_TVSHOWS_START) {
		let showsFromLS = getItemFromLocalStorage('tvShows');
		if (!showsFromLS) {
			try {
				getData(popularTvShows).then((result) => {
					let arr = result;
					let tvShows = arr.map((item) => {
						return new TvShowEntity(item); //mapping
					});
					let data = tvShows;
					let customTvShows = getItemFromLocalStorage('addedTvShows');
					if (customTvShows) {
						data = tvShows.concat(customTvShows);
					}
					setItemToLocalStorage('tvShows', data);
					store.dispatch({
						type: FETCH_TVSHOWS_SUCCESS,
						payload: data
					});
				});
			} catch (err) {
				store.dispatch({
					type: FETCH_TVSHOWS_FAILURE,
					payload: err,
					error: true
				});
			}
		} else {
			let showsLS = getItemFromLocalStorage('tvShows');
			let tvShows = showsLS || JSON.parse(showsLS);

			store.dispatch({
				type: FETCH_TVSHOWS_SUCCESS,
				payload: tvShows
			});
		}
	}

	if (action.type === GET_SIMILAR_TVSHOWS_START) {
		try {
			getSimilarTvShows(action.payload).then((result) => {
				let resultArr = result;
				let similarTvShows = resultArr.map((item) => {
					return new TvShowEntity(item);
				});
				store.dispatch({
					type: GET_SIMILAR_TVSHOWS_SUCCESS,
					payload: similarTvShows
				});
				let initialTvShows = getItemFromLocalStorage('tvShows');
				let fullTvShows = [...initialTvShows, ...similarTvShows];
				setItemToLocalStorage('fulltvshows', fullTvShows);
			});
		} catch (err) {
			store.dispatch({
				type: GET_SIMILAR_TVSHOWS_FAILURE,
				payload: err
			});
		}
	}
	return next(action);
};