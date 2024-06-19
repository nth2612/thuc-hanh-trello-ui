import { Box, Divider, ListItem, Menu, Tooltip, Typography } from '@mui/material'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: 'green',
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16
    },
    '&::before': {
      content : '"x"',
      left: 12
    },
    '&::after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12
    }
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2
  }
}))

function Notification() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Tooltip title='Notifications'>
        <IconButton
          id='notification-btn'
          aria-controls={open ? 'notification-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          size="small"
          sx={{ '&:hover' : { backgroundColor: '#a6c5e229' }
          }}>
          <NotificationsOutlinedIcon sx={{ color: 'white' }} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{
          '& .MuiPaper-root' : { width: '432px' }
          // '& > .MuiPaper-root > .MuiList-root' : { padding: '0 12px' }
        }}
        id='notification-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby' : 'notification-btn'
        }}
      >
        <ListItem sx={{ display: 'block' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h2' sx={{ fontSize: '20px', fontWeight: '500' }}>Notifications</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Only show unread</Typography>
              <Android12Switch defaultChecked />
              <MoreVertIcon/>
              <Switch/>
            </Box>
          </Box>
        </ListItem>
        <Divider/>
      </Menu>
    </>
  )
}

export default Notification
