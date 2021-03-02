import React from 'react'
import { connect } from 'react-redux'

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

const List = ({articleList}) => {

  const dateGenerator = (timestamp) => (
    new Date(timestamp).toISOString().substr(0, 10)
  )

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

const mapStateToProps = state => ({
  articleList: state.homeList.articleList
})

export default connect(mapStateToProps, null)(List)
