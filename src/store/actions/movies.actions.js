import {
    FETCH_MOVIES_START,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE
} from '../../constants';
import { getMovies } from '../../services';
import { url } from '../../constants';

export const fetchMovies = () => async dispatch => {
    dispatch({ type: FETCH_MOVIES_START })

    try {
        const movies = await getMovies(url);
        dispatch({
            type: FETCH_MOVIES_SUCCESS,
            movies
        })
    } catch (err) {
        dispatch({
            type: FETCH_MOVIES_FAILURE,
            payload: err,
            error: true
        })
    }
}