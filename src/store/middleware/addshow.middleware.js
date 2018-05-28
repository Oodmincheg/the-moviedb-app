import {
	ADD_CUSTOM_TVSHOW,
	CLOSE_FORM
} from '../../constants';
import {
	setItemToLocalStorage,
	getItemFromLocalStorage
} from '../../services';

export const addTvShowMiddleware = store => next => action => {
	if (action.type === ADD_CUSTOM_TVSHOW) {
		let addedTvShows = getItemFromLocalStorage('addedTvShows') || [];
		let tvShows = getItemFromLocalStorage('tvShows');
		action.payload.tvShow = true;
		addedTvShows.push(action.payload);
		let updatedTvShows = tvShows.concat(addedTvShows);
		setItemToLocalStorage('tvShows', updatedTvShows);
		setItemToLocalStorage('addedTvShows', addedTvShows);
		store.dispatch({
			type: CLOSE_FORM
		});
	}
	return next(action);
};