import {
    GET_GENRES,
    GET_GENRES_SUCCESS,
    GET_GENRES_FAILURE,
    genresData,
    genresFromTMDB
} from '../../constants';
import { getGenreData } from '../../services';

export const genresMiddleware = store => next => action => {
    if (action.type === GET_GENRES)
        try {
            getGenreData(genresData).then((result) => {
                let genres = result;
                let data = genres;
                console.log(result);
                store.dispatch({
                    type: GET_GENRES_SUCCESS,
                    payload: data
                });
            });
        } catch (err) {
            store.dispatch({
                type: GET_GENRES_FAILURE,
                payload: err,
                error: true
            });
        }
    return next(action);
}