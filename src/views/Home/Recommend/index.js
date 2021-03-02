import React from 'react'
import { connect } from 'react-redux'

/* Styles */
import {
  RecommendWrapper,
  RecommendItem
} from './Recommend.styled'

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

const mapStateToProps = state => ({
  recommendList: state.homeRecommend.recommendList
})

export default connect(mapStateToProps, null)(Recommend)
