import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducer/rootReducer'

const middlewares = [thunk]
const logger = createLogger()
if(process.env.NODE_ENV === 'development'){
	middlewares.push(logger)
}
const store = createStore( rootReducer, applyMiddleware(...middlewares))
export default store