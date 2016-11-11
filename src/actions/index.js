export function setStartTests() {
	return {
		type: 'SET_START_TESTS',
	}
}

export function startTests(tests) {
	return dispatch => {
		dispatch(setStartTests());

	}
}
