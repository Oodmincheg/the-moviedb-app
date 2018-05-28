export const setItemToLocalStorage = (name, item) => {
    if (typeof name === 'string') {
        return localStorage.setItem(name, JSON.stringify(item));
    }
    return item;
};

export const getItemFromLocalStorage = (item) => {
    if (typeof item === 'string') {
        return JSON.parse(localStorage.getItem(item));
    }
    return item;
};