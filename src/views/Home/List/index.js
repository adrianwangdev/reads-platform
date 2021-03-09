import React from 'react'
import { Link } from 'react-router-dom'
import { actions } from './stores'
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
  CommentAmount,
  MoreButton
} from './List.styled'

const List = ({
  articleList,
  moreArticleLists,
  getMoreLists
}) => {

  const dateGenerator = timestamp => timestamp.substr(0, 10)

  const renderTopicList = list => list.map(item => (
    <Link key={item.id} to='/detail'>
      <ListItem>
        <ListTitle>{item.title}</ListTitle>
        <ListDescription>{item.description}</ListDescription>
        <ListDetail>
          <CreateDate>{dateGenerator(item.createTime)}</CreateDate>
          <LikeAmount>{item.like}</LikeAmount>
          <CommentAmount>{item.comment}</CommentAmount>
        </ListDetail>
      </ListItem>
    </Link>
  ))

  return (
    <ListWrapper>
      { renderTopicList(articleList) }
      { moreArticleLists.length > 0 && renderTopicList(moreArticleLists) }
      <MoreButton onClick={getMoreLists}>載入所有精選文章</MoreButton>
    </ListWrapper>
  )
}

const mapStateToProps = state => ({
  moreArticleLists: state.homeMoreLists.moreArticleLists
})

const mapDispatchToProps = {
  getMoreLists: actions.getMoreLists
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
