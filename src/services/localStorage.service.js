export const getItemFromLocalStorage = (item) => {
    return typeof item === 'string' & JSON.parse(localStorage.getItem(item));
}