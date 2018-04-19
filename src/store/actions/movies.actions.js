import {
    FETCH_MOVIES_START,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    ADD_CUSTOM_MOVIE
} from '../../constants';
import { getData, MovieEntity } from '../../services';
import { popularMovies } from '../../constants';

export const fetchMovies = () => async dispatch => {
    dispatch({ type: FETCH_MOVIES_START })
    try {
        let movies = await getData(popularMovies);
        movies = movies.map((item => {
            return new MovieEntity(item)
        }));
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

export function addCustomMovie() {
    return {
        type: ADD_CUSTOM_MOVIE,
        payload
    }
}