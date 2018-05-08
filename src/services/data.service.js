export const getData = (url) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () =>
        (request.status === 200) ?
            resolve(
                (typeof (request.response) === 'string') ?
                    JSON.parse(request.response).results :
                    request.response.results
            )
            :
            reject(Error(request.statusText));
    request.onerror = (err) => reject(err)
    request.send();
    console.log(request.response);
});

export const getGenresData = (url) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () =>
        (request.status === 200) ?
            resolve(
                (typeof (request.response) === 'string') ?
                    JSON.parse(request.response).genres :
                    request.response.genres
            )
            :
            reject(Error(request.statusText));
    request.onerror = (err) => reject(err)
    request.send();
    console.log(request.response);
});

