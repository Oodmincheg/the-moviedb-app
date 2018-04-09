import {
    FETCH_TVSHOWS_START,
    FETCH_TVSHOWS_SUCCESS,
    FETCH_TVSHOWS_FAILURE
} from '../../constants';
import { getData } from '../../services';
import { popularTvShows } from '../../constants';

export const fetchTvShows = () => async dispatch => {
    dispatch({ type: FETCH_TVSHOWS_START })

    try {
        const tvShows = await getData(popularTvShows);
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