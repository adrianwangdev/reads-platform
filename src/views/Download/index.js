import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actions } from './stores'
import { Grid } from '@material-ui/core'

/* Components */
import DownloadCard from './DownloadCard'

/* Styles */
import {
  DownloadPage,
  DownloadWrapper,
  Title,
  DownloadListTitle
} from './download.styled'

const Download = ({
  downloadLists,
  getDownloadLists
}) => {

  const renderDownloadCards = list => (
    list.map(item => (
      <DownloadCard
        key={item.id}
        name={item.name}
        imageURL={item.imageURL}
        mobileDevice={item.mobileDevice}
      />
    ))
  )

  useEffect(getDownloadLists, [getDownloadLists])

  return (
    <DownloadPage>
      <DownloadWrapper maxWidth="md">
        <Grid container spacing={4} direction="column" alignItems="center">
          <Title>不限平台．隨時隨地揮灑你的創作</Title>
          <DownloadListTitle>下載 Reads App</DownloadListTitle>
          <Grid container spacing={4} justify="center">
            { renderDownloadCards(downloadLists) }
          </Grid>
        </Grid>
      </DownloadWrapper>
    </DownloadPage>
  )
}

const mapStateToProps = state => ({
  downloadLists: state.download.downloadLists
})

const mapDispatchToProps = {
  getDownloadLists: actions.getDownloadLists
}

export default connect(mapStateToProps, mapDispatchToProps)(Download)
