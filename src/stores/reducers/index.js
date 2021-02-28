import { combineReducers } from 'redux'
import { reducers as navbarReducer } from 'components/Header/Navbar/stores'
import { reducers as recommendListReducer } from 'components/Header/Navbar/SearchRecommend/stores'
import { reducers as topicReducer } from '../../views/Home/Topic/stores'

const reducer = combineReducers({
  navbar: navbarReducer,
  recommend: recommendListReducer,
  topic: topicReducer
})

export default reducer
