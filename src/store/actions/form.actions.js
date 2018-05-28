import {
	OPEN_FORM,
	CLOSE_FORM,
	TOGGLE_FORM
} from '../../constants';

export function openForm(payload) {
	return {
		type: OPEN_FORM,
		payload
	};
}

export function closeForm(payload) {
	return {
		type: CLOSE_FORM,
		payload
	};
}

export function toggleForm(payload) {
	return {
		type: TOGGLE_FORM,
		payload
	};
}