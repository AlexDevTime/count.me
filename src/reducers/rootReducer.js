function rootReducer(state, action) {
	switch (action.type) {
		case 'ADD':
			return Object.assign({}, state, { elems: [...state.elems, action.payload] });

		case 'EDIT':
			let newState = [...state.elems];
			let currentIndex = newState.findIndex(item => item.id === action.payload.id);
			newState[currentIndex] = action.payload;
			return Object.assign({}, state, { elems: [...newState] });

		case 'DELETE':
			return Object.assign({}, state, { elems: [...state.elems].filter(item => item.id !== action.payload) });

		case 'SORTING':
			return Object.assign({}, state, { sortOption: action.payload });

		default:
			return state;
	}
}

export default rootReducer;