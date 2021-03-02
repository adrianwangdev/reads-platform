import React from 'react'
import { connect } from 'react-redux'

/* Styles */
import {
  TopicWrapper,
  TopicTitle,
  TopicItem
} from './Topic.styled'

const Topic = ({ topicList }) => {

  const renderTopicList = () => topicList.map(item =>
    <TopicItem key={item.id}>{item.title}</TopicItem>  
  )

  return (
    <TopicWrapper>
      <TopicTitle>熱門話題</TopicTitle>
      { renderTopicList() }
    </TopicWrapper>
  )
}

const mapStateToProps = state => ({
  topicList: state.homeTopic.topicList
})

export default connect(mapStateToProps, null)(Topic)
