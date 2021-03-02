import { combineReducers } from 'redux'
import { reducers as navbarReducer } from 'components/Header/Navbar/stores'
import { reducers as recommendListReducer } from 'components/Header/Navbar/SearchRecommend/stores'
import { reducers as topicReducer } from '../../views/Home/Topic/stores'
import { reducers as listReducer } from '../../views/Home/List/stores'
import { reducers as recommendReducer } from '../../views/Home/Recommend/stores'

const reducer = combineReducers({
  navbar: navbarReducer,
  recommend: recommendListReducer,
  homeTopic: topicReducer,
  homeList: listReducer,
  homeRecommend: recommendReducer
})

export default reducer
