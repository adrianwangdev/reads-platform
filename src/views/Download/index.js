import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actions } from './stores'
import { Grid } from '@material-ui/core'
import { useWatch } from 'utilities/useWatch'

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
  keepUserLogin,
  getDownloadLists
}) => {

  const sortByDownloads = list => list.sort((a, b) => b.downloads - a.downloads )

  const renderDownloadCards = list => (
    list.map(item => (
      <DownloadCard
        key={item.name}
        name={item.name}
        imageURL={item.imageURL}
        mobileDevice={item.mobileDevice}
      />
    ))
  )

  useEffect(getDownloadLists, [getDownloadLists])

  useWatch(keepUserLogin)

  return (
    <DownloadPage>
      <DownloadWrapper maxWidth="md">
        <Grid container direction="column" alignItems="center">
          <Title>不限平台．隨時隨地揮灑你的創作</Title>
          <DownloadListTitle>下載 Reads App</DownloadListTitle>
          <Grid container spacing={4} justify="center">
            { renderDownloadCards(sortByDownloads(downloadLists)) }
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
  keepUserLogin: actions.keepUserLogin,
  getDownloadLists: actions.getDownloadLists
}

export default connect(mapStateToProps, mapDispatchToProps)(Download)
