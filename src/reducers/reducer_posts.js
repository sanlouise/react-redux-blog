import { FETCH_POSTS } from '../actions/index';


//Post is show action, [] list of blog posts
const INITIAL_STATE = { all: [], post: null};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_POSTS:
			return { ...state, all: action.payload.data };
		default:
			return state;
	}
}