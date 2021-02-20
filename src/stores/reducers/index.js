import { combineReducers } from 'redux'
import { reducers as navbarReducer } from 'components/Header/Navbar/stores'
import { reducers as recommendListReducer } from 'components/Header/Navbar/SearchRecommend/stores'

const reducer = combineReducers({
  navbar: navbarReducer,
  recommend: recommendListReducer
})

export default reducer
