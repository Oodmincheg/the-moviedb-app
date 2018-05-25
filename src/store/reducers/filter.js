import { FILTER_ITEMS } from '../../constants';

const initialState = {
	value: ''
}

export function filterReducer(state = initialState, { type, value }) {
	switch (type) {
		case FILTER_ITEMS:
			return {
				...state,
				value: value
			}
		default:
			return state;
	}

}