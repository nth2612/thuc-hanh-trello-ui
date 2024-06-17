import Avatar from '@mui/material/Avatar'
import myavt from '~/assets/myavt5.png'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Menu, Typography } from '@mui/material'
import OutputIcon from '@mui/icons-material/Output'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

function Account() {
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
      <Tooltip title="Account">
        <IconButton
          size="small"
          id='account-btn'
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Avatar sx={{ width: 24, height: 24 }} src={myavt}></Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{
          '& .MuiPaper-root' : { borderRadius: '8px' }
        }}
        id='account-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby' : 'account-btn'
        }}
      >
        <List subheader={
          <ListSubheader component={'div'} sx={{ color: '#626f86' }}>ACCOUNT</ListSubheader>
        }>
          <ListItem>
            <Avatar src={myavt} sx={{ width: 40, height: 40, mr: 1 }}></Avatar>
            <ListItemText
              sx={{ '& span' : { fontSize: '0.875rem' } }}
              primary='Tuấn Hải'
              secondary={
                <Typography variant='body1' sx={{ fontSize: '0.75rem' }}>notihuli@gmail.com</Typography>
              }
            />
          </ListItem>
          <ListItemButton>
            <ListItemText primary='Switch accounts' />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary='Manage account' />
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <OutputIcon/>
            </ListItemIcon>
          </ListItemButton>
        </List>
        <Divider/>
        <ListSubheader component={'div'} sx={{ color: '#626f86' }}>TRELLO</ListSubheader>
        <ListItemButton>
          <ListItemText primary='Profile and visibility' />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary='Activity' />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary='Cards' />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary='Settings' />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary='Theme' />
          <ListItemIcon sx={{ justifyContent: 'center' }}>
            <ChevronRightIcon/>
          </ListItemIcon>
        </ListItemButton>
        <Divider sx={{ marginY: 1 }}/>
        <ListItemButton>
          <ListItemText primary='Help' />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary='Shortcuts' />
        </ListItemButton>
        <Divider sx={{ marginY: 1 }}/>
        <ListItemButton>
          <ListItemText primary='Log out' />
        </ListItemButton>
      </Menu>
    </>
  )
}

export default Account
