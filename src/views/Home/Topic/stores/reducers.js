const defaultState = {
  topicList: [
    { id: 1, title: '手繪' },
    { id: 2, title: '社會議題' },
    { id: 3, title: '電影' },
    { id: 4, title: '閱讀' },
    { id: 5, title: '旅行' },
    { id: 6, title: '歷史' },
    { id: 7, title: '設計' },
    { id: 8, title: '電腦科學' },
    { id: 9, title: '攝影' },
    { id: 10, title: '生活智慧' }
  ]
}

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducers
