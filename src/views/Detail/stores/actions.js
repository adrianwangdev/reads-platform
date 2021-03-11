import * as types from './actionTypes'
import axios from 'axios'

const updateLists = data => ({
    type: types.GET_DETAILL,
    payload: {
        title: data.title,
        content: data.content
    }
})

export const getDetail = () => {
    return (dispatch) => {
        axios.get('/api/detail.json')
            .then(response => {
                const { data } = response.data
                dispatch(updateLists(data))
            })
            .catch(error => {
                console.warn(error)
            })
    }
}
