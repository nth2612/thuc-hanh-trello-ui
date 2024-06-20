import { Avatar, Box, Button, Divider, Tooltip, Typography, Menu, List, ListSubheader, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined'
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import myavt5 from '~/assets/myavt5.png'
import { useState } from 'react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import TableRowsIcon from '@mui/icons-material/TableRows'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ViewTimelineOutlinedIcon from '@mui/icons-material/ViewTimelineOutlined'
import PlaceIcon from '@mui/icons-material/Place'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'

const listViews = [
  {
    id: 1,
    icon: <DashboardOutlinedIcon/>,
    nameView: 'Board',
    disabled: false
  },
  {
    id: 2,
    icon: <TableRowsIcon/>,
    nameView: 'Table',
    disabled: true
  },
  {
    id: 3,
    icon: <CalendarMonthIcon/>,
    nameView: 'Calendar',
    disabled: true
  },
  {
    id: 4,
    icon: <ViewTimelineOutlinedIcon/>,
    nameView: 'Timeline',
    disabled: true
  },
  {
    id: 5,
    icon: <SignalCellularAltIcon/>,
    nameView: 'Dashboard',
    disabled: false
  },
  {
    id: 6,
    icon: <PlaceIcon/>,
    nameView: 'Map',
    disabled: true
  }
]

function CustomizeView() {
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
      <Tooltip title='Customize views'>
        <Button
          sx={{ minWidth: 'unset' }}
          id='btn-customize-views'
          aria-controls={open ? 'menu-customize-views' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <KeyboardArrowDownRoundedIcon />
        </Button>
      </Tooltip>
      <Menu
        id='menu-customize-views'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'btn-customize-views'
        }}
      >
        <List>
          <ListSubheader sx={{ textAlign: 'center', fontSize: '0.875rem' }}>Upgrade for Views</ListSubheader>
          {listViews.map(vi => (
            <Box key={vi.id} sx={{ cursor: !vi.disabled ? 'pointer' : 'not-allowed' }}>
              <ListItemButton disabled={vi.disabled} sx={{ padding: '6px 12px' }}>
                <ListItemIcon sx={{ minWidth: 'unset' }}>
                  <DragIndicatorIcon fontSize='16px' />
                </ListItemIcon>
                <ListItemIcon sx={{ minWidth: 'unset' }}>
                  {vi.disabled ? <CheckBoxOutlineBlankOutlinedIcon sx={{ fontSize: '20px' }} /> : <CheckBoxOutlinedIcon sx={{ fontSize: '20px' }} />}
                </ListItemIcon>
                <ListItemText
                  sx={{ marginY: 0 }}
                  primary={
                    <Typography sx={{ display: 'flex', alignItems: 'center', paddingBottom: 0.5, pl: 0.5 }}>
                      {vi.icon}{vi.nameView}
                    </Typography>
                  }
                  secondary={
                    <Typography sx={{ fontSize: '0.75rem' }}>{vi.seText}</Typography>
                  }
                />
                { vi.disabled && <ListItemIcon sx={{ minWidth: '24px' }} ><LockOutlinedIcon fontSize='18px' /></ListItemIcon> }
              </ListItemButton>
            </Box>
          ))}
        </List>
      </Menu>
    </>
  )
}

export default CustomizeView
