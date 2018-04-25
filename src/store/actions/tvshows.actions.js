import {
    FETCH_TVSHOWS_START,
    ADD_CUSTOM_TVSHOW
} from '../../constants';
import { getData, TvShowEntity } from '../../services';
import { popularTvShows } from '../../constants';

export function fetchTvShows() {
    return {
        type: FETCH_TVSHOWS_START
    }
}

export function addCustomMTvshow(payload) {
    return {
        type: ADD_CUSTOM_TVSHOW,
        payload
    }
}