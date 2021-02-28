import React from 'react'
import { connect } from 'react-redux'

/* Styles */
import {
  TopicWrapper,
  TopicItem
} from './Topic.styled'

const Topic = ({ topicList }) => {

  const renderTopicList = () => topicList.map(item =>
    <TopicItem key={item.id}>{item.title}</TopicItem>  
  )

  return (
    <TopicWrapper>
      { renderTopicList() }
    </TopicWrapper>
  )
}

const mapStateToProps = state => ({
  topicList: state.topic.topicList
})

export default connect(mapStateToProps, null)(Topic)
