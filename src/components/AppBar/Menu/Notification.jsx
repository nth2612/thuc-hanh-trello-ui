import { Tooltip } from '@mui/material'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'

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
    </>
  )
}

export default Notification
