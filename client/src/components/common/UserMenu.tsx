import { ReactEventHandler, ReactHTML, useState } from 'react'
import { LogoutOutlined } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText, Menu, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import menuConfigs from '../../config/menu.config'
import { setUser } from '../../redux/features/userSlice'
import { RootState } from '../../redux/store'

const UserMenu = () => {
  const { user } = useSelector((state: RootState) => state.user)

  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget)
  return (
    <>
      {user && (
        <>
          <Typography
            variant="h6"
            sx={{ cursor: 'pointer', userSelect: 'none' }}
            onClick={toggleMenu}
          >
            {user?.displayName}
          </Typography>
          <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
            {menuConfigs.user.map((item, index) => (
              <ListItemButton
                component={Link}
                to={item.path}
                key={index}
                onClick={() => setAnchorEl(null)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={<Typography textTransform="uppercase">{item.display}</Typography>}
                />
              </ListItemButton>
            ))}
            <ListItemButton sx={{ borderRadius: '10px' }} onClick={() => dispatch(setUser(null))}>
              <ListItemIcon>
                <LogoutOutlined />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={<Typography textTransform="uppercase">Sign out</Typography>}
              />
            </ListItemButton>
          </Menu>
        </>
      )}
    </>
  )
}

export default UserMenu
