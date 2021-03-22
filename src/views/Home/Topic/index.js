import React from 'react'

/* Styles */
import {
  TopicWrapper,
  TopicTitle,
  TopicItem
} from './topic.styled'

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

export default Topic
