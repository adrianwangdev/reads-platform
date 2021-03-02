const defaultState = {
  recommendList: [
    {
      id: 1,
      title: '日更挑戰',
      category: 'daily'
    },
    {
      id: 2,
      title: '會員專屬',
      category: 'member'
    },
    {
      id: 3,
      title: '精選連載',
      category: 'select'
    },
    {
      id: 4,
      title: '版權聲明',
      category: 'publication'
    }
  ]
}

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducers
