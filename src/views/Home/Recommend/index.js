import React from 'react'

/* Styles */
import {
  RecommendWrapper,
  RecommendItem
} from './recommend.styled'

const Recommend = ({ recommendList }) => {

  const renderRecommendList = () => recommendList.map(item => (
    <RecommendItem key={item.id} category={`${item.category}`}>
      <span>{item.title}</span>
    </RecommendItem>
  ))
  
  return (
    <RecommendWrapper>
      {renderRecommendList()}
    </RecommendWrapper>
  )
}

export default Recommend
