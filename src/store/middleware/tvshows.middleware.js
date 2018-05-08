import {
    FETCH_TVSHOWS_START,
    FETCH_TVSHOWS_SUCCESS,
    FETCH_TVSHOWS_FAILURE,
    popularTvShows
} from '../../constants';
import {
    getData,
    TvShowEntity,
    getItemFromLocalStorage,
    setItemsToLocalStorage
} from '../../services';

export const tvShowsMiddleware = store => next => action => {
    if (action.type === FETCH_TVSHOWS_START) {
        let showsFromLS = getItemFromLocalStorage('tvShows');
        if (!showsFromLS) {
            try {
                getData(popularTvShows).then((result) => {
                    let arr = result;
                    let tvShows = arr.map((item) => {
                        return new TvShowEntity(item);
                    });
                    let data = tvShows;
                    let customTvShows = getItemFromLocalStorage('addedTvShows');
                    if(customTvShows) {
                        data = tvShows.concat(customTvShows);
                    }
                    setItemsToLocalStorage('tvShows', data)
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
                })
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
    return next(action);
}