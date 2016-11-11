export function setStartTests() {
	return {
		type: 'SET_START_TESTS',
	}
}

export function setTestStatus(passed, id) {
	return {
		type: 'SET_TEST_STATUS',
		passed,
		id
	}
}

export function startTests(tests) {
	return dispatch => {
		dispatch(setStartTests());

		tests.forEach(test => {
			const delay = 7000 + Math.random() * 7000;
		  const testPassed = Math.random() > 0.5;

			setTimeout(function() {
				dispatch(setTestStatus(testPassed, test.id));
			}, delay);
		});
	}
}
