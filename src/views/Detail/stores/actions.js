import * as types from './actionTypes'

const updateArticle = data => ({
  type: types.GET_DETAIL,
  payload: data
})

export const getDetail = (id, articleList) => {
  const article = articleList.find(item => item.id.toString() === id)
  return (dispatch) => {
    dispatch(updateArticle(article))
  }
}
