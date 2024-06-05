import { Container, Paper, Stack, Box } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import menuConfigs from '../../config/menu.config'

const Footer = () => {
  return (
    <div>
      <Container>
        <Paper square={true} sx={{ backgroundImage: 'unset', padding: '2rem' }}>
          <Stack
            alignItems="center"
            justifyContent={'space-between'}
            direction={{ xs: 'column', md: 'row' }}
            sx={{ height: 'max-content' }}
          >
            <Logo />
            <Box>{menuConfigs}</Box>
          </Stack>
        </Paper>
      </Container>
    </div>
  )
}

export default Footer
