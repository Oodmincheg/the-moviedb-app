export const getMovies = (url) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () =>
        (request.status === 200) ?
            resolve(JSON.parse(request.response).results) :
            reject(Error(request.statusText))
    request.onerror = (err) => reject(err)
    request.send();
});

