import { Button, List, ListItemButton, ListItemText, Menu, Typography } from '@mui/material'
import { useState } from 'react'
import GroupIcon from '@mui/icons-material/Group'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'

function Create() {
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
      <Button
        id='create-btn'
        aria-controls={open ? 'menu-create' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant='contained'
        size='small'
        sx={{
          backgroundColor: 'rgba(255,255,255,0.2)',
          color: 'white',
          paddingY: '7px',
          '&:hover' : { backgroundColor: 'rgba(255,255,255,0.4)', boxShadow: 'unset' },
          boxShadow: 'unset'
        }}
      >
        Create
      </Button>
      <Menu
        id='menu-create'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'create-btn'
        }}>
        <List>
          <ListItemButton>
            <ListItemText
              sx={{ marginY: 0 }}
              primary={
                <Typography sx={{ display: 'flex', alignItems: 'center', paddingBottom: 0.5, pl: 0.5 }}>
                  <AssignmentTurnedInIcon fontSize='small' sx={{ color: '#44546f' }} />
                  <Typography variant='span'>Create board</Typography>
                </Typography>
              }
              secondary={
                <Typography sx={{ fontSize: '0.75rem' }}>A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.</Typography>
              }
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              sx={{ marginY: 0 }}
              primary={
                <Typography sx={{ display: 'flex', alignItems: 'center', paddingBottom: 0.5, pl: 0.5 }}>
                  <DashboardIcon fontSize='small' sx={{ color: '#44546f' }} />
                  <Typography variant='span'>Start with a template</Typography>
                </Typography>
              }
              secondary={
                <Typography sx={{ fontSize: '0.75rem' }}>Get started faster with a board template.</Typography>
              }
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              sx={{ marginY: 0 }}
              primary={
                <Typography sx={{ display: 'flex', alignItems: 'center', paddingBottom: 0.5, pl: 0.5 }}>
                  <GroupIcon fontSize='small' sx={{ color: '#44546f' }} />
                  <Typography variant='span'>Create Workspace</Typography>
                </Typography>
              }
              secondary={
                <Typography sx={{ fontSize: '0.75rem' }}>A Workspace is a group of boards and people. Use it to organize your company, side hustle, family, or friends.</Typography>
              }
            />
          </ListItemButton>
        </List>
      </Menu>
    </>
  )
}

export default Create
