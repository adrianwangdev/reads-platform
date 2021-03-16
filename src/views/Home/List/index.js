import React, { useEffect } from 'react'
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
  MoreButton,
  RemindText
} from './List.styled'

const List = ({
  articleList,
  showMore,
  getArticleList,
  showMoreList
}) => {

  useEffect(getArticleList, [getArticleList])

  const dateGenerator = timestamp => {
    const date = new Date(timestamp * 1000)
    const year = date.getFullYear()
    let month = '' + (date.getMonth() + 1)
    let day = '' + date.getDate()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
  }

  const renderTopicList = list => list.map(item => (
    <Link key={item.createTime.seconds} to={`/detail/${item.createTime.seconds}`}>
      <ListItem>
        <ListTitle>{item.title}</ListTitle>
        <ListDescription>{item.description}</ListDescription>
        <ListDetail>
          <CreateDate>{dateGenerator(item.createTime.seconds)}</CreateDate>
          <LikeAmount>{item.like}</LikeAmount>
          <CommentAmount>{item.comment}</CommentAmount>
        </ListDetail>
      </ListItem>
    </Link>
  ))

  const firstRenderList = list => {
    const initArticle = []
    for (let i = 0; i < 5; i++) {
      initArticle.push(list[i])
    }
    return renderTopicList(initArticle)
  }

  return (
    <ListWrapper>
      {
        articleList.length > 0 && (
          showMore
            ? renderTopicList(articleList)
            : firstRenderList(articleList)
        )
      }
      {
        showMore
          ? <RemindText>精選文章已經到底了哦！</RemindText>
          : <MoreButton onClick={showMoreList}>載入所有精選文章</MoreButton>
      }
    </ListWrapper>
  )
}

const mapStateToProps = state => ({
  articleList: state.homeMoreLists.articleList,
  showMore: state.homeMoreLists.showMore
})

const mapDispatchToProps = {
  getArticleList: actions.getArticleList,
  showMoreList: actions.showMoreList
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
