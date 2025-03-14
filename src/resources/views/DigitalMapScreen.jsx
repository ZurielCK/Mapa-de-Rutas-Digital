import { Container } from '@mui/material';
import MapView from '../../modules/digital_map/MapView';
import React from 'react'

 const DigitalMapScreen = () => {
  return (
    <Container maxWidth='xl' disableGutters>
      <MapView></MapView>
    </Container>
  )
}

export default DigitalMapScreen;