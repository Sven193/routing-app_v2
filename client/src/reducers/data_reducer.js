import { POST_DATA, FETCH_DATA, DELETE_DATA, FETCH_PAGES, 
	FETCH_PAGE_ABOUT, FETCH_PAGE_PARTICIPATE, FETCH_PAGE_RESULTS } from '../actions/index';
import _ from 'lodash';

export default function(state={}, action) {
	if(!action) {
		return state;
	}
	switch (action.type) {
		case POST_DATA:
			return {...state, ...action.payload};
		case FETCH_DATA:
			return {...action.payload};
		case DELETE_DATA:
			return _.omit(state, action.payload);
		case FETCH_PAGES:
			return {...action.payload};
		case FETCH_PAGE_ABOUT:
			return {...state, ...action.payload};
		case FETCH_PAGE_PARTICIPATE:
			return {...state, ...action.payload};
		case FETCH_PAGE_RESULTS:
			return {...state, ...action.payload};
	};
	return state;
}