import {
	OPEN_FORM,
	CLOSE_FORM,
	TOGGLE_FORM
} from '../../constants';

const initialState = {
	isFormOpen: false
}

export function formReducer(state = initialState, { type }) {
	switch (type) {
		case OPEN_FORM:
			return {
				state,
				isFormOpen: true
			};
		case CLOSE_FORM:
			return {
				state,
				isFormOpen: false
			};
		case TOGGLE_FORM:
			return {
				state,
				isFormOpen: !state.isFormOpen
			};
		default:
			return state;
	}
} 