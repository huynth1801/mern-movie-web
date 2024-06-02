import React from 'react' // Import React for JSX usage within icons

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined'
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined'
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined'
import { SvgIconProps } from '@mui/material'

interface MenuItem {
  display: string
  path: string
  icon: SvgIconProps
  state: string
}

const main: MenuItem[] = [
  {
    display: 'home',
    path: '/',
    icon: <HomeOutlinedIcon />,
    state: 'home',
  },
  {
    display: 'movies',
    path: '/movie',
    icon: <SlideshowOutlinedIcon />,
    state: 'movie',
  },
  {
    display: 'tv series',
    path: '/tv',
    icon: <LiveTvOutlinedIcon />,
    state: 'tv',
  },
  {
    display: 'search',
    path: '/search',
    icon: <SearchOutlinedIcon />,
    state: 'search',
  },
]

const user: MenuItem[] = [
  {
    display: 'favorites',
    path: '/favorites',
    icon: <FavoriteBorderOutlinedIcon />,
    state: 'favorite',
  },
  {
    display: 'reviews',
    path: '/reviews',
    icon: <RateReviewOutlinedIcon />,
    state: 'reviews',
  },
  {
    display: 'password update',
    path: '/password-update',
    icon: <LockResetOutlinedIcon />,
    state: 'password.update',
  },
]

const menuConfigs: { main: MenuItem[]; user: MenuItem[] } = { main, user }

export default menuConfigs
