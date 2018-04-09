import { combineReducers } from 'redux';
import { moviesReducer } from './movies';
import {tvShowsReducer} from './tvshows'

export const rootReducer = combineReducers({
    moviesReducer,
    tvShowsReducer
});