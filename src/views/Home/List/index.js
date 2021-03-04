import React from 'react'

/* Styles */
import {
  ListWrapper,
  ListItem,
  ListTitle,
  ListDescription,
  ListDetail,
  CreateDate,
  LikeAmount,
  CommentAmount
} from './List.styled'

const List = ({ articleList }) => {

  const dateGenerator = timestamp => timestamp.substr(0, 10)

  const renderTopicList = () => articleList.map(item => (
    <ListItem key={item.id}>
      <ListTitle>{item.title}</ListTitle>
      <ListDescription>{item.description}</ListDescription>
      <ListDetail>
        <CreateDate>{dateGenerator(item.createTime)}</CreateDate>
        <LikeAmount>{item.like}</LikeAmount>
        <CommentAmount>{item.comment}</CommentAmount>
      </ListDetail>
    </ListItem>
  ))

  return (
    <ListWrapper>
      {renderTopicList()}
    </ListWrapper>
  )
}

export default List
