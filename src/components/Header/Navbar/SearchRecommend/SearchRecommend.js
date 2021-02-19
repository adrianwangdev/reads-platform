import React from 'react'

/* Styles */
import {
  RecommendWrapper,
  RecommendTitle,
  RecommendSwitch,
  RecommendList,
  RecommendItem
} from './SearchRecommend.styled'

const SearchRecommend = ({ recommendList }) => {

  const renderList = (list) => (
    list.map((item, index) => (
      <RecommendItem key={index}>{item}</RecommendItem>
    ))
  )
  
  return (
    <RecommendWrapper>

      <RecommendTitle>
        <p>熱門推薦</p>
        <RecommendSwitch>換一批</RecommendSwitch>
      </RecommendTitle>

      <RecommendList>
        { renderList(recommendList) }
      </RecommendList>

    </RecommendWrapper>
  )
}

export default SearchRecommend
