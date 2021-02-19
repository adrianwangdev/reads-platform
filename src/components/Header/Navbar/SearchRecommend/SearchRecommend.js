import React from 'react'

/* Styles */
import {
  RecommendWrapper,
  RecommendTitle,
  RecommendSwitch,
  RecommendList,
  RecommendItem
} from './SearchRecommend.styled'

const SearchRecommend = () => {

  return (
    <RecommendWrapper>

      <RecommendTitle>
        <p>熱門推薦</p>
        <RecommendSwitch>換一批</RecommendSwitch>
      </RecommendTitle>

      <RecommendList>
        <RecommendItem>React</RecommendItem>
        <RecommendItem>投資</RecommendItem>
        <RecommendItem>生活</RecommendItem>
        <RecommendItem>Vue</RecommendItem>
        <RecommendItem>軟體業</RecommendItem>
        <RecommendItem>Docker</RecommendItem>
        <RecommendItem>前端</RecommendItem>
        <RecommendItem>美妝</RecommendItem>
        <RecommendItem>Youtuber</RecommendItem>
        <RecommendItem>保險業</RecommendItem>
      </RecommendList>

    </RecommendWrapper>
  )
}

export default SearchRecommend
