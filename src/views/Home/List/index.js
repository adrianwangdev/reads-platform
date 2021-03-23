import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { actions } from './stores'
import { connect } from 'react-redux'
import { dateGenerator } from 'utilities/unixTimestampConverter'

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
} from './list.styled'

const List = ({
  articleList,
  filteredList,
  showMore,
  searchContent,
  getArticleList,
  showMoreList,
  filterArticle
}) => {

  useEffect(getArticleList, [getArticleList])

  useEffect(() => {
    filterArticle(searchContent, articleList)
  }, [searchContent])

  const renderTopicList = list => list.map(item => (
    <Link key={item.id} to={`/detail/${item.id}`}>
      <ListItem>
        <ListTitle>{item.title}</ListTitle>
        <ListDescription>{item.description}</ListDescription>
        <ListDetail>
          <CreateDate>{dateGenerator(item.createTime.seconds * 1000)}</CreateDate>
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
        filteredList.length > 0
          ? renderTopicList(filteredList)
          : <>
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
            </>
      }
    </ListWrapper>
  )
}

const mapStateToProps = state => ({
  articleList: state.list.articleList,
  filteredList: state.list.filteredList,
  showMore: state.list.showMore,
  searchContent: state.navbar.searchContent
})

const mapDispatchToProps = {
  getArticleList: actions.getArticleList,
  showMoreList: actions.showMoreList,
  filterArticle: actions.filterArticle
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
