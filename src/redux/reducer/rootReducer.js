import { combineReducers } from 'redux'
import IndexReducer from './IndexReducer'
import IndexReducer2 from './IndexReducer2'
const rootReducer = combineReducers({
	IndexReducer,
	IndexReducer2
})
export default rootReducer