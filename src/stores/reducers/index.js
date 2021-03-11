import { combineReducers } from 'redux'
import { reducers as navbarReducer } from 'components/Header/Navbar/stores'
import { reducers as recommendListReducer } from 'components/Header/Navbar/SearchRecommend/stores'
import { reducers as homeReducer } from '../../views/Home/stores'
import { reducers as listReducer } from '../../views/Home/List/stores'
import { reducers as detailReducer } from '../../views/Detail/stores'

const reducer = combineReducers({
  navbar: navbarReducer,
  recommend: recommendListReducer,
  homeLists: homeReducer,
  homeMoreLists: listReducer,
  detailContent: detailReducer
})

export default reducer
