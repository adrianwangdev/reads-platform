import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actions } from './stores'
import { Grid } from '@material-ui/core'
import { useWatch } from 'utilities/useWatch'

/* Components */
import Topic from './Topic'
import List from './List'
import Recommend from './Recommend'
import Writer from './Writer'

/* Styles */
import {
  HomeWrapper,
  Banner,
  BackToTopButton,
  LoginMessage
} from './home.styled'

/* Images */
import BannerImage from '../../assets/images/home/banner.jpg'

const Home = ({
  topicList,
  recommendList,
  writerList,
  userLogin,
  keepUserLogin,
  showTopButton,
  getHomeLists,
  toggleTopVisible
}) => {
  
  const handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

  useWatch(keepUserLogin)

  useEffect(getHomeLists, [getHomeLists])

  useEffect(() => {
    window.addEventListener('scroll', toggleTopVisible)
    return () => {
      window.removeEventListener('scroll', toggleTopVisible)
    }
  }, [showTopButton, toggleTopVisible])

  return (
    <HomeWrapper maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Banner>
            <img src={BannerImage} alt="banner"/>
          </Banner>
          <List />
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
      { userLogin ? <LoginMessage>登入成功！</LoginMessage> : null}
    </HomeWrapper>
  )
}

const mapStateToProps = state => ({
  topicList: state.home.topicList,
  recommendList: state.home.recommendList,
  writerList: state.home.writerList,
  showTopButton: state.home.showTopButton,
  userLogin: state.login.userLogin
})

const mapDispatchToProps = {
  keepUserLogin: actions.keepUserLogin,
  getHomeLists: actions.getHomeLists,
  toggleTopVisible: actions.toggleTopVisible
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
