import { combineReducers } from 'redux'
import { reducers as navbarReducer } from 'components/Header/Navbar/stores'
import { reducers as recommendListReducer } from 'components/Header/Navbar/SearchRecommend/stores'
import { reducers as homeReducer } from 'views/Home/stores'
import { reducers as listReducer } from 'views/Home/List/stores'
import { reducers as detailReducer } from 'views/Detail/stores'
import { reducers as loginReducer } from 'views/Login/stores'
import { reducers as downloadReducer } from 'views/Download/stores'
import { reducers as writeReducer } from 'views/Write/stores'

const reducer = combineReducers({
  navbar: navbarReducer,
  recommend: recommendListReducer,
  home: homeReducer,
  list: listReducer,
  detail: detailReducer,
  login: loginReducer,
  download: downloadReducer,
  write: writeReducer
})

export default reducer
