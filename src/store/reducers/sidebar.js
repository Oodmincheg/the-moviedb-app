import { TOGGLE_SIDEBAR } from '../../constants';

const initialState = {
	isSidebarOpen: true
}

export function sidebarReducer(state = initialState, { type }) {
	switch (type) {
		case TOGGLE_SIDEBAR:
			return {
				state,
				isSidebarOpen: !state.isSidebarOpen
			}
		default:
			return state;
	}
} 