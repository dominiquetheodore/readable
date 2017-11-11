import { RECEIVE_CATEGORIES } from '../actions'

const categories = (state = [], action ) => {
    switch (action.type) {
    	case RECEIVE_CATEGORIES:
      		return [...action.payload.categories]
      default:
          return state;
    }
}

export default categories