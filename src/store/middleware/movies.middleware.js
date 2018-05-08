import {
    FETCH_MOVIES_START,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    popularMovies
} from '../../constants';
import {
    getData,
    MovieEntity,
    setItemsToLocalStorage,
    getItemFromLocalStorage
} from '../../services';

export const moviesMiddleware = store => next => action => {
    if (action.type === FETCH_MOVIES_START) {
        let moviesFromLS = getItemFromLocalStorage('movies');
        if (!moviesFromLS) {
            try {
                getData(popularMovies).then((result) => {
                    let arr = result;
                    let movies = arr.map((item) => {
                        return new MovieEntity(item);
                    });
                    let data = movies;
                    let customMovies = getItemFromLocalStorage('addedMovies');
                    if (customMovies) {
                        data = movies.concat(customMovies);
                    }
                    setItemsToLocalStorage('movies', data);
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

        } else {
            let moviesLS = getItemFromLocalStorage('movies');
            let movies = moviesLS || JSON.parse(moviesLS);

            store.dispatch({
                type: FETCH_MOVIES_SUCCESS,
                payload: movies
            });
        }
    }
    return next(action);
}