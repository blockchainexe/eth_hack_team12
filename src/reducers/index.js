import App from './AppReducer'
import root from './../reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({App, root})

export default rootReducer
