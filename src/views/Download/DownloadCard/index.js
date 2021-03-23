import React from 'react'
import { Grid } from '@material-ui/core'

/* Styles */
import {
  CardWrapper,
  OsImage,
  OsName
} from './downloadCard.styled'

const DownloadCard = ({
  name, imageURL, mobileDevice
}) => (
  <Grid item xs={12} sm={4}>
    <CardWrapper mobileDevice={!!mobileDevice} >
      <OsImage src={imageURL} alt={name} />
      <OsName>{name}</OsName>
    </CardWrapper>
  </Grid>
)

export default DownloadCard
