const defaultState = {
  articleList: [
    {
      id: 1,
      title: '談談 PC 端的一些設計',
      description: '說到 PC 端，這裡不得不提到 Web，這兩個概念有些人容易弄混淆，認為是同一個意思。但其實是有區別的，準確的叫法會顯得你更專業一些。',
      createTime: Date.now(),
      like: 410,
      comment: 98
    },
    {
      id: 2,
      title: '需求管理規範',
      description: 'MOMO雲敏捷項目管理，融合了敏捷、DevOps思想，打通了整個從需求、研發、測試、運維、運營的端到端敏捷。在實踐中通過運維自動化，將Scrum敏捷團隊開發的產品快速上線，並通過及時的運營，反饋給敏捷團隊進行方向調整。',
      createTime: Date.now(),
      like: 64,
      comment: 5
    },
    {
      id: 3,
      title: '戴望舒——在最美的時光裡錯過',
      description: '他生命中的第一個有著丁香般芬芳的姑娘，名叫施絳年，是其好友施蟄存的妹妹，在某年的某天，他們相遇了，這不是美麗的遇見，卻在他們最美好的年齡。',
      createTime: Date.now(),
      like: 1296,
      comment: 166
    },
    {
      id: 4,
      title: '搞定需求分析與設計',
      description: '最近部門新加不少新同學，如何讓他們更好的融入到團隊中，更好更快的完成測試任務，特針對新人進行測試需求分析與設計進行培訓與輔導。本文整理部分內容和大家一起分享。',
      createTime: Date.now(),
      like: 17,
      comment: 2
    },
    {
      id: 5,
      title: '50 歲重拾文學夢，6個月成為簽約作者',
      description: '50歲是半百之人，人生已走過一半。 50歲，有的人生，星辰隕落，繁華落盡已結束。有的人生，枯枝煥發，風華正茂剛開始。',
      createTime: Date.now(),
      like: 291,
      comment: 40
    },
  ]
}

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducers
