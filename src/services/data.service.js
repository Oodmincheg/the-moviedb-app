import { similarMovies, similarTvShows } from '../constants';

export const getData = (url) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () =>
        request.status === 200 ?
            resolve(
                typeof request.response === 'string' ?
                    JSON.parse(request.response).results :
                    request.response.results
            )
            :
            reject(Error(request.statusText));
    request.onerror = (err) => reject(err);
    request.send();
});

export const getGenresData = (url) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () =>
        request.status === 200 ?
            resolve(
                typeof request.response === 'string' ?
                    JSON.parse(request.response).genres :
                    request.response.genres
            )
            :
            reject(Error(request.statusText));
    request.onerror = (err) => reject(err);
    request.send();
});

export const getSimilarMovies = (movie_id) => new Promise((resolve, reject) => {
    const url = similarMovies(movie_id);
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () =>
    request.status === 200 ?
    resolve(
        typeof request.response === 'string' ?
        JSON.parse(request.response).results :
        request.response.results
    )
    :
    reject(Error(request.statusText));
    request.onerror = (err) => reject(err);
    request.send();
});

export const getSimilarTvShows = (tv_id) => new Promise((resolve, reject) => {
    const url = similarTvShows(tv_id);
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () =>
    request.status === 200 ?
    resolve(
        typeof request.response === 'string' ?
        JSON.parse(request.response).results :
        request.response.results
    )
    :
    reject(Error(request.statusText));
    request.onerror = (err) => reject(err);
    request.send();
});