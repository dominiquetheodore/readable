import { combineReducers } from 'redux'
import categories from './categoryReducer'
import posts from './postReducer'
import comments from './commentReducer'
import { reducer as formReducer } from 'redux-form'

const reducer = combineReducers({
	categories,
	posts,
	comments,
	form: formReducer
})

export default reducer