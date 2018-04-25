import {
    FETCH_TVSHOWS_START,
    FETCH_TVSHOWS_SUCCESS,
    FETCH_TVSHOWS_FAILURE,
    popularTvShows
} from '../../constants';
import { getData, TvShowEntity } from '../../services';

export const tvShowsMiddleware = store => next => action => {
    if (action.type === FETCH_TVSHOWS_START) {
        try {
            getData(popularTvShows).then((result) => {
                let arr = result;
                let tvShows = arr.map((item) => {
                    return new TvShowEntity(item);
                });
                let data = tvShows;
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
    }
    return next(action);
}