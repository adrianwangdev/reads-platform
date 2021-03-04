import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actions } from './stores'
import { Grid } from '@material-ui/core'

/* Components */
import Topic from './Topic'
import List from './List'
import Recommend from './Recommend'
import Writer from './Writer'

/* Styles */
import {
  HomeWrapper,
  Banner
} from './home.styled'

/* Images */
import BannerImage from '../../assets/images/home/banner.jpg'

const Home = ({
  getHomeLists,
  topicList,
  articleList,
  recommendList,
  writerList
}) => {
  
  useEffect(getHomeLists, [])

  return (
    <HomeWrapper maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Banner>
            <img src={BannerImage} alt="banner"/>
          </Banner>
          <List articleList={articleList} />
        </Grid>
        <Grid item xs={4}>
          <Recommend recommendList={recommendList} />
          <Topic topicList={topicList} />
          <Writer writerList={writerList} />
        </Grid>
      </Grid>
    </HomeWrapper>
  )
}

const mapStateToProps = state => ({
  topicList: state.homeLists.topicList,
  articleList: state.homeLists.articleList,
  recommendList: state.homeLists.recommendList,
  writerList: state.homeLists.writerList
})

const mapDispatchToProps = {
  getHomeLists: actions.getHomeLists
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
