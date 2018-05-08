import {
    FETCH_MOVIES_START,
    ADD_CUSTOM_MOVIE
} from '../../constants';

export function fetchMovies() {
    return {
        type: FETCH_MOVIES_START
    };
}

export function addCustomMovie(payload) {
    return {
        type: ADD_CUSTOM_MOVIE,
        payload
    };
}