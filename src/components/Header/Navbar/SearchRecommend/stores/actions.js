import * as types from './actionTypes'
import { db } from "services/firebase"

const updateList = data => ({
  type: types.GET_RECOMMEND_LIST,
  payload: {
    recommendList: data,
    totalPage: Math.ceil(data.length / 10)
  }
})

export const getRecommendList = () => {
  return (dispatch) => {
    db
      .collection('searchRecommend')
      .get()
      .then(snapshot => {
        let recommendList = {}
        snapshot.forEach(doc => {
          recommendList = doc.data().recommendList
        })
        dispatch(updateList(recommendList))
      })
      .catch(error => {
        console.log('Error getting documents', error)
      })
  }
}

export const handleListMouseEnter = () => ({
  type: types.LIST_MOUSE_ENTER,
  payload: true
})

export const handleListMouseLeave = () => ({
  type: types.LIST_MOUSE_LEAVE,
  payload: false
})

export const handleListChangePage = (page, totalPage, spinIcon) => {
  let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '')
  originAngle
    ? originAngle = parseInt(originAngle, 10)
    : originAngle = 0
  spinIcon.style.transform = `rotate(${originAngle + 180}deg)`

  return page < totalPage
    ? {
        type: types.LIST_CHANGE_PAGE,
        payload: page + 1
      }
    : {
        type: types.LIST_CHANGE_PAGE,
        payload: 1
      }
}
