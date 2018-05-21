import {
    ADD_MOVIE_TO_LIBRARY,
    REMOVE_MOVIE_FROM_LIBRARY,
    ADD_TVSHOW_TO_LIBRARY,
    REMOVE_TVSHOW_FROM_LIBRARY
} from '../../constants';
import {
    getItemFromLocalStorage,
    setItemToLocalStorage
} from '../../services';

export const myLibraryMiddleware = store => next => action => {
    if (action.type === ADD_MOVIE_TO_LIBRARY) {
        localStorage.removeItem('movies');
        let currentMovies = store.getState().moviesReducer.movies;
        console.log(currentMovies);
        setItemToLocalStorage('movies', currentMovies);
    }

    if (action.type === ADD_TVSHOW_TO_LIBRARY) {
        localStorage.removeItem('tvShows');
        let currentTvShows = store.getState().tvShowsReducer.tvShows;
        console.log(currentTvShows);
        setItemToLocalStorage('tvShows', currentTvShows);
    }

    // if (action.type === REMOVE_TVSHOW_FROM_LIBRARY) {

    // }

    return next(action);
}