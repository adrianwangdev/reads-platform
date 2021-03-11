import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './stores'
import { Grid } from '@material-ui/core'

/* Styles */
import {
  DetailPage,
  DetailWrapper,
  GridWhiteBackground,
  ArticleInfo,
  InfoTitle,
  CreatedTime,
  InfoSubtitle,
  ArticleContent
} from './detail.styled'

const Detail = ({
  detailContent,
  getDetail
}) => {

  const { id } = useParams()

  useEffect(() => {
    getDetail(id)
  }, [])

  return (
      <DetailPage>
      <DetailWrapper maxWidth="md">
        <Grid container spacing={4}>
          <GridWhiteBackground item xs={8} className="mr16">
            <InfoTitle>
              { detailContent.title }
            </InfoTitle>
            <ArticleInfo>
              <CreatedTime dateTime="2001-05-15T19:00">2020-12-02 17:04</CreatedTime>
              <InfoSubtitle>字數 3,184</InfoSubtitle>
              <InfoSubtitle>閱讀人數 49,325</InfoSubtitle>
            </ArticleInfo>
            <ArticleContent
              dangerouslySetInnerHTML={{ __html: detailContent.content }}
            >
            </ArticleContent>
          </GridWhiteBackground>
          <GridWhiteBackground item xs={4}>
            作者資訊
            推薦閱讀
          </GridWhiteBackground>
        </Grid>
      </DetailWrapper>
    </DetailPage>
  )
}

const mapStateToProps = state => ({
  detailContent: state.detailContent
})

const mapDispatchToProps = {
  getDetail: actions.getDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
