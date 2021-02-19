import { combineReducers } from 'redux'
import { reducers as navbarReducer } from 'components/Header/Navbar/stores'

const reducer = combineReducers({
  navbar: navbarReducer
})

export default reducer
