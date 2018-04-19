import {
    FETCH_TVSHOWS_SUCCESS,
    ADD_CUSTOM_TVSHOW
} from '../../constants';

const initialState = {
    tvShows: [],
    isLoaded: false
}

export function tvShowsReducer(state = initialState, { type, tvShows, payload }) {
    switch (type) {
        case FETCH_TVSHOWS_SUCCESS:
            return {
                ...state,
                tvShows: tvShows,
                isLoaded: true
            }
        case ADD_CUSTOM_TVSHOW:
            return {
                ...state,
                tvShows: [payload, ...state.tvShows]
            }
        default:
            return state;
    }
}