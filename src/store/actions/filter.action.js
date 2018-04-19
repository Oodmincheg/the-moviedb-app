import { FILTER_ITEMS } from '../../constants';

export function filterItems(payload) {
    return {
        type: FILTER_ITEMS,
        payload
    }
}