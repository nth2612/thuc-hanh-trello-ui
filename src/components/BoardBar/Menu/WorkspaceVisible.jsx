import { Avatar, Box, Button, Divider, Menu, Tooltip, Typography } from '@mui/material'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined'
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import myavt5 from '~/assets/myavt5.png'
import { useState } from 'react'

function WorkspaceVisible() {
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
      <Tooltip title='Change visibility'>
        <Button
          id='btn-change-visibility'
          aria-controls={open ? 'menu-change-visibility' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ paddingRight: 1.5, paddingLeft: 2 }}
          startIcon={<Groups2OutlinedIcon/>}>
          Workspace visible
        </Button>
      </Tooltip>
      <Menu
        id='menu-change-visibility'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'btn-change-visibility'
        }}
      >
        
      </Menu>
    </>
  )
}

export default WorkspaceVisible
