import { Avatar, Box, Button, Divider, List, ListItemButton, ListItemText, ListSubheader, Menu, Tooltip, Typography } from '@mui/material'
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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import CorporateFareIcon from '@mui/icons-material/CorporateFare'
import PublicIcon from '@mui/icons-material/Public'
import DoneIcon from '@mui/icons-material/Done'
import { cloneElement } from 'react'

const listVisibility = [
  {
    id: 1,
    icon: <LockOutlinedIcon fontSize='16px' sx={{ color: '#C9372C', mr: 0.5 }}/>,
    priText: 'Private',
    seText: 'Only board members can see this board. Workspace admins can close the board or remove members.',
    disabled : false,
    checked : true
  },
  {
    id: 2,
    icon: <PeopleAltOutlinedIcon fontSize='16px' sx={{ color: '#44546f', mr: 0.5 }}/>,
    priText: 'Workspace',
    seText: 'All members of the Test Workspace can see and edit this board.',
    disabled : false,
    checked : false
  },
  {
    id: 3,
    icon: <CorporateFareIcon fontSize='16px' sx={{ color: '#44546f', mr: 0.5 }}/>,
    priText: 'Organization',
    seText: 'All members of the organization can see this board. The board must be added to an enterprise Workspace to enable this.',
    disabled : true,
    checked : false
  },
  {
    id: 4,
    icon: <PublicIcon fontSize='16px' sx={{ color: '#22a06b', mr: 0.5 }} />,
    priText: 'Public',
    seText: 'Anyone on the internet can see this board. Only board members can edit.',
    disabled : false,
    checked : false
  }
]

function WorkspaceVisible() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const choosedVisibility = listVisibility.find(vi => vi.checked === true)
  const textChoosed = choosedVisibility.priText
  const IconChoosed = () => cloneElement(choosedVisibility.icon, {
    sx: { ...choosedVisibility.icon.props.sx, color: 'white' }
  })
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
          startIcon={<IconChoosed />}>
          {textChoosed} visible
        </Button>
      </Tooltip>
      <Menu
        id='menu-change-visibility'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              width: '384px'
            }
          }
        }}
        MenuListProps={{
          'aria-labelledby': 'btn-change-visibility'
        }}
      >
        <List sx={{ paddingY: 0 }}>
          <ListSubheader sx={{ textAlign: 'center', fontSize: '0.875rem' }}>Change visibility</ListSubheader>
          {listVisibility.map(vi =>(
            <ListItemButton disabled={vi.disabled} key={vi.id} sx={{ padding: '6px 12px' }}>
              <ListItemText
                sx={{ marginY: 0 }}
                primary={
                  <Typography sx={{ display: 'flex', alignItems: 'center', paddingBottom: 0.5, pl: 0.5 }}>
                    {vi.icon}
                    <Typography variant='span'>{vi.priText}{vi.checked && <span><DoneIcon sx={{ fontSize: '1.125rem', paddingTop: '4px' }} /></span>}</Typography>
                  </Typography>
                }
                secondary={
                  <Typography sx={{ fontSize: '0.75rem' }}>{vi.seText}</Typography>
                }
              />
            </ListItemButton>
          ))}
        </List>
      </Menu>
    </>
  )
}

export default WorkspaceVisible
