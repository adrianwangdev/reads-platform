import React from 'react'

/* Styles */
import {
  RecommendWrapper,
  RecommendItem
} from './recommend.styled'

const Recommend = ({ recommendList }) => {

  const renderRecommendList = list => list.map(item => (
    <RecommendItem key={item.id} category={`${item.category}`}>
      <span>{item.title}</span>
    </RecommendItem>
  ))

  return (
    <RecommendWrapper>
      {renderRecommendList(recommendList)}
    </RecommendWrapper>
  )
}

export default Recommend
