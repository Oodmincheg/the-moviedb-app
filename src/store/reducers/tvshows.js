import { FETCH_TVSHOWS_SUCCESS } from '../../constants';

const initialState = {
    tvShows: []
}

export function tvShowsReducer(state = initialState, { type, tvShows }) {
    switch (type) {
        case FETCH_TVSHOWS_SUCCESS:
            return {
                ...state,
                tvShows: tvShows
            }
        default:
            return state;
    }
}