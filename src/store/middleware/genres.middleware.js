import {
    GET_GENRES,
    GET_GENRES_SUCCESS,
    GET_GENRES_FAILURE,
    genresFromTMDB
} from '../../constants';
import {
    getGenresData,
    setItemToLocalStorage,
    getItemFromLocalStorage
} from '../../services';

export const genresMiddleware = store => next => action => {
    if (action.type === GET_GENRES) {
        let genresFromLS = getItemFromLocalStorage('genres');
        if (!genresFromLS) {
            try {
                getGenresData(genresFromTMDB).then((result) => {
                    let genres = result;
                    let data = genres;
                    setItemToLocalStorage('genres', data);
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
        } else {
            let genresLS = getItemFromLocalStorage('genres');
            let genres = genresLS || JSON.parse(genresLS);

            store.dispatch({
                type: GET_GENRES_SUCCESS,
                payload: genres
            });
        }
    }
    return next(action);
}