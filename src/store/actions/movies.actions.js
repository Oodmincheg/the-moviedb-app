import {
  FETCH_MOVIES_START,
  ADD_CUSTOM_MOVIE,
  GET_SIMILAR_MOVIES_START
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

export function fetchSimilarMovies (payload) {
  return {
    type: GET_SIMILAR_MOVIES_START,
    payload
  };
}