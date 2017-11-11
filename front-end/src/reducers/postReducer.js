import { RECEIVE_POSTS, ADD_POST, RECEIVE_POST, FETCH_POST, RECEIVE_POSTS_BY_CATEGORY, UPVOTE_POST, EDIT_POST, DOWNVOTE_POST, DELETE_POST } from '../actions'

const posts = (state = [], action ) => {
    switch (action.type) {
    	case RECEIVE_POSTS:
          return [...action.payload.sort((a, b) => b.voteScore - a.voteScore)]
      case RECEIVE_POSTS_BY_CATEGORY: 
        //return {...state, [posts]: action.payload}
        return action.payload
      case RECEIVE_POST:
          return { ...state, post: action.post}
      case FETCH_POST: 
        return {...state, post: action.payload}
      case ADD_POST:
      		return [ ...state, action.payload
        ]
      case DELETE_POST:
        return state.filter(p => p.id !== action.payload.id);
      case EDIT_POST:
        const post = action.payload;  
        return state.map(p => {
        if (p.id !== post.id) {
          return p;
        }
        return {
          ...p,
          title: post.title,
          body: post.body,
          timestamp: post.timestamp
        }
      });

      case UPVOTE_POST:
        const vpost = action.payload;  
        return state.map(p => {
        if (p.id !== vpost.id) {
          return p;
        }
        return {
          ...p,
          voteScore: vpost.voteScore++,
        }
      });
      case DOWNVOTE_POST:
        const dpost = action.payload;  
        return state.map(p => {
        if (p.id !== dpost.id) {
          return p;
        }
        return {
          ...p,
          voteScore: dpost.voteScore--,
        }
      });
      case 'SET_SORTING':
        switch(action.sorting){
          case 'votescore':
            return [...state.sort((a, b) => b.voteScore - a.voteScore)]
          case 'timestamp':
            return [...state.sort((a, b) => b.timestamp - a.timestamp)]
          default:
            return state
        }
        
      default:
          return state;
    }
}

export default posts