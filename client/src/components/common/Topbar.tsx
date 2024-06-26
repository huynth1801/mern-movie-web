import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { ReactElement, ReactNode } from 'react'
import { Menu } from '@mui/icons-material'
import { DarkModeOutlined } from '@mui/icons-material'
import { WbSunnyOutlined } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  colors,
  useScrollTrigger,
} from '@mui/material'
import { cloneElement, useState } from 'react'
import { Link } from 'react-router-dom'
import menuConfigs from '../../config/menu.config'
import themeConfigs, { themeModes } from '../../config/theme.config'
import { setAuthModalOpen } from '../../redux/features/authModalSlice'
import { setThemeMode } from '../../redux/features/themeMode.slice'
import Logo from './Logo'
import UserMenu from './UserMenu'

interface ScrollAppBarType {
  children?: ReactElement
  window?: Window
}

const ScrollAppBar = ({ children, window }: ScrollAppBarType) => {
  const { themeMode } = useSelector((state: RootState) => state.themeMode)

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window : undefined,
  })
  return cloneElement(children, {
    sx: {
      color: trigger
        ? 'text.primary'
        : themeMode === themeModes.dark
          ? 'primary.contrastText'
          : 'text.primary',
      backgroundColor: trigger
        ? 'background.paper'
        : themeMode === themeModes.dark
          ? 'transparent'
          : 'background.paper',
    },
  })
}

const Topbar = () => {
  const { user } = useSelector((state: RootState) => state.user)
  const { appState } = useSelector((state: RootState) => state.appState)
  const { themeMode } = useSelector((state: RootState) => state.themeMode)

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const dispatch = useDispatch()

  const onSwitchTheme = () => {
    const theme = themeMode === themeModes.dark ? themeModes.light : themeModes.dark
    dispatch(setThemeMode(theme))
  }
  return (
    <>
      <ScrollAppBar>
        <AppBar elevation={0} sx={{ zIndex: 9999 }}>
          <Toolbar sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
              <IconButton color="inherit" sx={{ mr: 2, display: { md: 'none' } }}>
                <Menu />
              </IconButton>
              <Box sx={{ display: { xs: 'inline-block', md: 'none' } }}>
                <Logo />
              </Box>
            </Stack>
            {/* main menu */}
            <Box flexGrow={1} alignItems={'center'} display={{ xs: 'none', md: 'flex' }}>
              <Box sx={{ marginRight: '30px' }}>
                <Logo />
              </Box>
              {menuConfigs.main.map((item, index) => (
                <Button
                  key={index}
                  sx={{
                    color: appState.includes(item?.state) ? 'primary.contrastText' : 'inherit',
                    mr: 2,
                  }}
                  component={Link}
                  to={item.path}
                  variant={appState.includes(item.state) ? 'contained' : 'text'}
                >
                  {item?.display}
                </Button>
              ))}
              <IconButton sx={{ color: 'inherit' }} onClick={onSwitchTheme}>
                {themeMode === themeModes.dark && <DarkModeOutlined />}
                {themeMode === themeModes.light && <WbSunnyOutlined />}
              </IconButton>
            </Box>

            {/* user menu */}
            <Stack spacing={3} direction={'row'} alignItems={'center'}>
              {!user && (
                <Button variant="contained" onClick={() => dispatch(setAuthModalOpen(true))}>
                  Sign In
                </Button>
              )}
            </Stack>
            {user && <UserMenu />}
          </Toolbar>
        </AppBar>
      </ScrollAppBar>
    </>
  )
}

export default Topbar
