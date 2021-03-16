import React, { useEffect, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './stores'
import { Grid } from '@material-ui/core'

import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import {
  WritePage,
  WriteWrapper,
  GridWhiteBackground,
  ArticleTitleInput
} from "./write.styled";

const Write = ({
  userLogin,
  postList,
  articleTitle,
  articleContent,
  getMyPostList,
  handleChangeArticleTitle,
  handleChangeArticleContent,
  handleSubmitPost
}) => {

  const titleRef = useRef()

  useEffect(getMyPostList, [postList, getMyPostList])

  return (
    // !userLogin
    //   ? <Redirect to='/login' />
    //   : ()

        <WritePage>
          <WriteWrapper maxWidth="md">
            <Grid container spacing={4}>
              <GridWhiteBackground item xs={12}>
                <ArticleTitleInput
                  ref={titleRef}
                  value={articleTitle}
                  onChange={() => handleChangeArticleTitle(titleRef.current)}
                />
                {/*<InfoTitle>*/}
                {/*  { detailContent.title }*/}
                {/*</InfoTitle>*/}
                {/*<ArticleInfo>*/}
                {/*  <CreatedTime dateTime="2001-05-15T19:00">2020-12-02 17:04</CreatedTime>*/}
                {/*  <InfoSubtitle>字數 3,184</InfoSubtitle>*/}
                {/*  <InfoSubtitle>閱讀人數 49,325</InfoSubtitle>*/}
                {/*</ArticleInfo>*/}
                {/*<ArticleContent*/}
                {/*  dangerouslySetInnerHTML={{ __html: detailContent.content }}*/}
                {/*>*/}
                {/*</ArticleContent>*/}

              </GridWhiteBackground>

              <GridWhiteBackground item xs={12}>
                <CKEditor
                  editor={ ClassicEditor }
                  onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                  } }
                  onChange={handleChangeArticleContent}
                  data={articleContent}
                />
              </GridWhiteBackground>
              <button
                onClick={() => handleSubmitPost(articleTitle, articleContent)}
              >Post</button>
            </Grid>
          </WriteWrapper>
        </WritePage>

      // )
  )
}

const mapStateToProps = state => ({
  userLogin: state.login.userLogin,
  postList: state.write.postList,
  articleTitle: state.write.articleTitle,
  articleContent: state.write.articleContent
})

const mapDispatchToProps = {
  getMyPostList: actions.getMyPostList,
  handleChangeArticleTitle: actions.handleChangeArticleTitle,
  handleChangeArticleContent: actions.handleChangeArticleContent,
  handleSubmitPost: actions.handleSubmitPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Write)
