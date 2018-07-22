import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import userReducer from './user/userReducer'
import indexReducer from './reducers/AppReducer'

const reducer = combineReducers({
  user: userReducer,
  App: indexReducer,
  routing: routerReducer
})

export default reducer
