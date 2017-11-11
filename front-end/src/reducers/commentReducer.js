import { RECEIVE_COMMENTS, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, UPVOTE_COMMENT, DOWNVOTE_COMMENT } from '../actions'

const comments = (state = [], action ) => {
    switch (action.type) {
    	case RECEIVE_COMMENTS:
      		return [ ...state, ...action.payload]
      	case ADD_COMMENT:
      		return [ ...state, action.payload];
      	case EDIT_COMMENT:
          const comment = action.payload;  
	        return state.map(c => {
	        if (c.id !== comment.id) {
	          return c;
	        }
	      return {
	          ...c,
	          title: comment.title,
	          body: comment.body,
            timestamp: comment.timestamp
	        }
	      });
	  case DELETE_COMMENT:
        return state.filter(c => c.id !== action.payload.id);
      case UPVOTE_COMMENT:
        const ucomment = action.payload;  
        return state.map(c => {
        if (c.id !== ucomment.id) {
          return c;
        }
        return {
          ...c,
          voteScore: ucomment.voteScore++,
        }
      });
      case DOWNVOTE_COMMENT:
        const dcomment = action.payload;  
        return state.map(c => {
        if (c.id !== dcomment.id) {
          return c;
        }
        return {
          ...c,
          voteScore: dcomment.voteScore--,
        }
      });
      default:
          return state;
    }
}

export default comments