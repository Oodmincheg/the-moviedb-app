import { combineReducers } from 'redux';
import { moviesReducer } from './movies';
import { tvShowsReducer } from './tvshows';
import { formReducer } from './form';
import { genresReducer } from './genres';
import {libraryReducer} from './my-library';

export const rootReducer = combineReducers({
    moviesReducer,
    tvShowsReducer,
    formReducer,
    genresReducer,
    libraryReducer
});