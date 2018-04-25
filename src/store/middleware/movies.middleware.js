import {
    FETCH_MOVIES_START,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    popularMovies
} from '../../constants';
import { getData, MovieEntity } from '../../services';

export const moviesMiddleware = store => next => action => {
    if (action.type === FETCH_MOVIES_START) {
        try {
            getData(popularMovies).then((result) => {
                let arr = result;
                let movies = arr.map((item) => {
                    return new MovieEntity(item);
                });
                let data = movies;
                store.dispatch({
                    type: FETCH_MOVIES_SUCCESS,
                    payload: data
                });
            });
        } catch (err) {
            store.dispatch({
                type: FETCH_MOVIES_FAILURE,
                payload: err,
                error: true
            })
        }
    }
    return next(action);
}