export const setItemsToLocalStorage = (name, item) => {
    if (typeof name === 'string') {
        return localStorage.setItem(name, JSON.stringify(item));
    }
}

export const getItemFromLocalStorage = (item) => {
    if (typeof item === 'string') {
        return JSON.parse(localStorage.getItem(item));
    }
}

export const setLocalRemoveLast = (array, key) => {
    let arrToStr = JSON.stringify(array);
    localStorage.removeItem(key);
    localStorage.setItem(key, arrToStr);
}