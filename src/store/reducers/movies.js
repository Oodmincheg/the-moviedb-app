import { FETCH_MOVIES_SUCCESS } from '../../constants';

const initialState = {
    movies: []
}

export function moviesReducer(state = initialState, { type, movies }) {
    switch (type) {
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: movies
            }
        default:
            return state;
    }
}