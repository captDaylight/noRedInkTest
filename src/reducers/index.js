const defaultState = {
	tests: [
		{
			id: 1,
			description: 'commas are rotated properly',
			status: 1, // 1: not started, 2: running, 3: passed, 4: failed
		},
	  {
			id: 2,
			description: 'exclamation points stand up straight',
			status: 1,
		},
	  {
			id: 3,
			description: 'run-on sentences don\'t run forever',
			status: 1,
		},
	  {
			id: 4,
			description: 'question marks curl down, not up',
			status: 1,
		},
	  {
			id: 5,
			description: 'semicolons are adequately waterproof',
			status: 1,
		},
	  {
			id: 6,
			description: 'capital letters can do yoga',
			status: 1,
		 }
	]
};

export default function (state = defaultState, action) {
	switch (action.type) {
		case 'SET_START_TESTS':
			return {
				...state,
				tests: state.tests.map(test => ({ ...test, status: 2 }))
			};

		// case 'SET_TEST_STATUS':
		// 	const newTests
		// 	return {
		// 		...state,
		// 		tests: [...tests]
		// 	}

		default:
			return state;
	}
}
