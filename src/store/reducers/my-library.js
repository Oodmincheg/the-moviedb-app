import {
    ADD_MOVIE_TO_LIBRARY,
    REMOVE_MOVIE_FROM_LIBRARY,
    ADD_TVSHOW_TO_LIBRARY,
    REMOVE_TVSHOW_FROM_LIBRARY,
    INITIALIZE_MY_LIBRARY
} from '../../constants';
import { setItemToLocalStorage, getItemFromLocalStorage } from '../../services/localStorage.service';

const initialState = {
    libraryArray: []
}

export function libraryReducer(state = initialState, { type, payload }) {
    switch (type) {
        case INITIALIZE_MY_LIBRARY:
            let libraryArrayFromLS = getItemFromLocalStorage('my-library');
            return {
                ...state,
                libraryArray: libraryArrayFromLS
            }
        case ADD_MOVIE_TO_LIBRARY: 
            let movie = payload;
            movie.isInLibrary = true;
            localStorage.removeItem('my-library');
            setItemToLocalStorage('my-library', [...state.libraryArray, payload]);
            return {
                ...state,
                libraryArray: [...state.libraryArray, payload]
            }
        case REMOVE_MOVIE_FROM_LIBRARY:
            let updatedLibrary = state.libraryArray.filter(m => m.id !== payload.id);
            let deletedMovie = payload;
            deletedMovie.isInLibrary = false;
            localStorage.removeItem('my-library');
            setItemToLocalStorage('my-library', updatedLibrary);
            return {
                ...state,
                libraryArray: updatedLibrary
            }
        case ADD_TVSHOW_TO_LIBRARY:
            let tvShow = payload;
            tvShow.isInLibrary = true;
            setItemToLocalStorage('my-library', [...state.libraryArray, payload]);
            return {
                ...state,
                libraryArray: [...state.libraryArray, payload]
            }
        case REMOVE_TVSHOW_FROM_LIBRARY:
            let deletedTvShow = payload;
            deletedTvShow.isInLibrary = false;
            var updatedLibrary = state.libraryArray.filter(m => m.id !== payload.id);
            localStorage.removeItem('my-library');
            setItemToLocalStorage('my-library', updatedLibrary);
            return {
                ...state,
                libraryArray: updatedLibrary
            }
        default:
            return state;
    }
}