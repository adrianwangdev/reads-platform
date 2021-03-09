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
  Banner,
  BackToTopButton
} from './home.styled'

/* Images */
import BannerImage from '../../assets/images/home/banner.jpg'

const Home = ({
  topicList,
  articleList,
  recommendList,
  writerList,
  showTopButton,
  getHomeLists,
  toggleTopVisible
}) => {
  
  const handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(getHomeLists, [])

  useEffect(() => {
    window.addEventListener('scroll', toggleTopVisible)
    return () => {
      window.removeEventListener('scroll', toggleTopVisible)
    }
  }, [showTopButton])

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
      {
        showTopButton
          ? <BackToTopButton onClick={handleScrollTop}>Top</BackToTopButton>
          : null
      }
    </HomeWrapper>
  )
}

const mapStateToProps = state => ({
  topicList: state.homeLists.topicList,
  articleList: state.homeLists.articleList,
  recommendList: state.homeLists.recommendList,
  writerList: state.homeLists.writerList,
  showTopButton: state.homeLists.showTopButton
})

const mapDispatchToProps = {
  getHomeLists: actions.getHomeLists,
  toggleTopVisible: actions.toggleTopVisible
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
