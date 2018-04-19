import {
    FETCH_TVSHOWS_START,
    FETCH_TVSHOWS_SUCCESS,
    FETCH_TVSHOWS_FAILURE,
    ADD_CUSTOM_TVSHOW
} from '../../constants';
import { getData, TvShowEntity } from '../../services';
import { popularTvShows } from '../../constants';

export const fetchTvShows = () => async dispatch => {
    dispatch({ type: FETCH_TVSHOWS_START })

    try {
        let tvShows = await getData(popularTvShows);
        tvShows = tvShows.map((item => {
            return new TvShowEntity(item);
        }));
        dispatch({
            type: FETCH_TVSHOWS_SUCCESS,
            tvShows
        })
    } catch (err) {
        dispatch({
            type: FETCH_TVSHOWS_FAILURE,
            payload: err,
            error: true
        })
    }
}

export function addCustomMTvshow() {
    return {
        type: ADD_CUSTOM_TVSHOW,
        payload
    }
}