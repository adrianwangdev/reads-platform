import React, { useEffect, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './stores'
import { Grid } from '@material-ui/core'
import { useWatch } from 'utilities/useWatch'
import { dateGenerator } from 'utilities/unixTimestampConverter'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import {
  WritePage,
  WriteWrapper,
  GridWhiteBackground,
  ArticleTitleInput,
  SubmitPostButton,
  SectionTitle,
  PostList,
  PostItem,
  PostTitle,
  PostContent,
  CreatedTime,
} from "./write.styled"

const Write = ({
  userLogin,
  keepUserLogin,
  postList,
  articleTitle,
  articleContent,
  getMyPostList,
  handleChangeArticleTitle,
  handleChangeArticleContent,
  handleSubmitPost
}) => {

  const titleRef = useRef()

  const renderMyPostList = list => {
    const sortedList = list.sort((next, prev) => prev.createTime - next.createTime)
    return (
      sortedList.map(item => (
        <PostItem key={item.createTime}>
          <PostTitle>{item.title}</PostTitle>
          <PostContent dangerouslySetInnerHTML={{__html: item.content}}/>
          <CreatedTime>{dateGenerator(item.createTime)}</CreatedTime>
        </PostItem>
      ))
    )
  }
  useWatch(keepUserLogin)
  useEffect(getMyPostList, [getMyPostList])

  return (
    !userLogin
      ? <Redirect to='/login' />
      : (
        <WritePage>
          <WriteWrapper maxWidth="md">
            <Grid container spacing={4}>
              <GridWhiteBackground item xs={12}>
                <ArticleTitleInput
                  ref={titleRef}
                  value={articleTitle}
                  onChange={() => handleChangeArticleTitle(titleRef.current)}
                />
                <CKEditor
                  editor={ClassicEditor}
                  onChange={handleChangeArticleContent}
                  data={articleContent}
                />
                <SubmitPostButton
                  onClick={() => {
                    handleSubmitPost(articleTitle, articleContent)
                    getMyPostList()
                  }}
                >發布文章</SubmitPostButton>
              </GridWhiteBackground>

              <GridWhiteBackground item xs={12} style={{marginTop: '4rem'}}>
                <SectionTitle>我的文章</SectionTitle>
                <PostList>
                  { postList.length > 0 && renderMyPostList(postList) }
                </PostList>
              </GridWhiteBackground>
            </Grid>
          </WriteWrapper>
        </WritePage>
      )
  )
}

const mapStateToProps = state => ({
  userLogin: state.login.userLogin,
  postList: state.write.postList,
  articleTitle: state.write.articleTitle,
  articleContent: state.write.articleContent
})

const mapDispatchToProps = {
  keepUserLogin: actions.keepUserLogin,
  getMyPostList: actions.getMyPostList,
  handleChangeArticleTitle: actions.handleChangeArticleTitle,
  handleChangeArticleContent: actions.handleChangeArticleContent,
  handleSubmitPost: actions.handleSubmitPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Write)
