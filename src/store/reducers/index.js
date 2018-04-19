import { combineReducers } from 'redux';
import { moviesReducer } from './movies';
import { tvShowsReducer } from './tvshows';
import { formReducer } from './form';

export const rootReducer = combineReducers({
    moviesReducer,
    tvShowsReducer,
    formReducer
});