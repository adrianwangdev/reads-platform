import React from 'react'
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

const Home = () => (
  <HomeWrapper maxWidth="md">
    <Grid container spacing={4}>
      <Grid item xs={8}>
        <Banner>
          <img src={BannerImage} alt="banner"/>
        </Banner>
        <Topic />
        <List />
      </Grid>
      <Grid item xs={4}>
        <Recommend />
        <Writer />
      </Grid>
    </Grid>
  </HomeWrapper>
)

export default Home
