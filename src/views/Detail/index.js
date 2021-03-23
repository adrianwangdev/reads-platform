import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useWatch } from 'utilities/useWatch'
import { useRWD } from 'utilities/useRWD'
import { connect } from 'react-redux'
import { actions } from './stores'
import { actions as homeActions } from '../Home/stores'
import { Grid } from '@material-ui/core'

/* Styles */
import {
  ArticleContent,
  ArticleInfo,
  AuthorAvatar,
  AuthorDescription,
  AuthorFollowButton,
  AuthorInfo,
  AuthorName,
  AuthorWrapper,
  DetailPage,
  DetailWrapper,
  GridWhiteBackground,
  InfoSubtitle,
  InfoTitle,
  MoreArticleLikeAmount,
  MoreArticleTitle,
  MoreArticleWrapper,
  SectionTitle
} from './detail.styled'

const Detail = ({
  articleDetail,
  articleList,
  getDetail,
  keepUserLogin,
  toggleDevice
}) => {

  useWatch(keepUserLogin)

  useRWD(toggleDevice)

  const { id } = useParams()

  const renderArticleDetail = data => (
    <>
      <InfoTitle>{data.title}</InfoTitle>
      <ArticleInfo>
        <InfoSubtitle>{data.like} 位讀者喜歡這篇文章</InfoSubtitle>
      </ArticleInfo>
      <ArticleContent dangerouslySetInnerHTML={{__html: data.content}} />
    </>
  )

  const renderAuthor = data => (
    <AuthorWrapper>
      <AuthorAvatar>
        <img src={data.authorAvatar} alt=""/>
      </AuthorAvatar>
      <AuthorInfo>
        <AuthorName>{data.authorName}</AuthorName>
        <AuthorDescription>
          <p>文章<span>28</span></p>
          <p>追蹤<span>13.4k</span></p>
        </AuthorDescription>
      </AuthorInfo>
      <AuthorFollowButton>追蹤</AuthorFollowButton>
    </AuthorWrapper>
  )

  const renderMoreArticle = () => (
    <>
      <SectionTitle>更多 {articleDetail.authorName} 的文章</SectionTitle>
      <MoreArticleWrapper>
        <MoreArticleTitle>其它文章 1</MoreArticleTitle>
        <MoreArticleLikeAmount>49 位讀者喜歡這篇文章</MoreArticleLikeAmount>
      </MoreArticleWrapper>
      <MoreArticleWrapper>
        <MoreArticleTitle>其它文章 2</MoreArticleTitle>
        <MoreArticleLikeAmount>49 位讀者喜歡這篇文章</MoreArticleLikeAmount>
      </MoreArticleWrapper>
      <MoreArticleWrapper>
        <MoreArticleTitle>其它文章 3</MoreArticleTitle>
        <MoreArticleLikeAmount>49 位讀者喜歡這篇文章</MoreArticleLikeAmount>
      </MoreArticleWrapper>
    </>
  )

  useEffect(() => {
    getDetail(id, articleList)
  }, [id, articleList, getDetail])

  return (
    <DetailPage>
      <DetailWrapper maxWidth="md">
        <Grid container spacing={4} alignItems={'flex-start'}>
          <GridWhiteBackground item xs={12} md={8} className="mr16">
            { renderArticleDetail(articleDetail) }
          </GridWhiteBackground>
          <Grid item xs={12} md={4}>
            <Grid container spacing={4}>
              <GridWhiteBackground item xs={12} className="mb16">
                { renderAuthor(articleDetail) }
              </GridWhiteBackground>
              <GridWhiteBackground item xs={12}>
                { renderMoreArticle() }
              </GridWhiteBackground>
            </Grid>
          </Grid>
        </Grid>
      </DetailWrapper>
    </DetailPage>
  )
}

const mapStateToProps = state => ({
  articleDetail: state.detail.articleDetail,
  articleList: state.list.articleList
})

const mapDispatchToProps = {
  getDetail: actions.getDetail,
  keepUserLogin: homeActions.keepUserLogin,
  toggleDevice: homeActions.toggleDevice
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
