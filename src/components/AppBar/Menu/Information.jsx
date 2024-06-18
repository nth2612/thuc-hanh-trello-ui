import { Menu, Tooltip } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'

function Information() {
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
      <Tooltip title='Information'>
        <IconButton
          id='information-btn'
          aria-controls={open ? 'information-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          size="small"
          sx={{ '&:hover' : { backgroundColor: '#a6c5e229' }
          }}>
          <HelpOutlineIcon sx={{ color: 'white' }} />
        </IconButton>
      </Tooltip>
      <Menu
        id='information-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby' : 'information-btn'
        }}
      >

      </Menu>
    </>
  )
}

export default Information
