import AppsIcon from '@mui/icons-material/Apps'
import atlas from '~/assets/atlass.svg?react'
import trello from '~/assets/trello.svg?react'
import { useState } from 'react'
import { Box, SvgIcon, Button, MenuList, Paper, MenuItem, Typography, ListItemIcon, ListItemText, Menu } from '@mui/material'

function More() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  };
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Button sx={{
        p: 0,
        minWidth: 'unset'
      }}
      id='more-button'
      aria-controls={open ? 'menu-more' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      >
        <AppsIcon/>
      </Button>
      <Menu
        id='menu-more'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'more-button'
        }}>
        <MenuList subheader={'YOUR APPS'} sx={{ fontSize: '11px', color: '#9fadbc', paddingX: 1, paddingY: 2 }}>
          <MenuItem>
            <ListItemIcon sx={{backgroundColor: 'green'}}>
              <SvgIcon component={atlas} />
            </ListItemIcon>
            <ListItemText>Atlassian Home</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SvgIcon component={trello} />
            </ListItemIcon>
            <ListItemText>Trello</ListItemText>
          </MenuItem>
        </MenuList>
        <MenuList subheader={'RECOMMEND FOR YOUR SYSTEM'} sx={{ fontSize: '11px', color: '#9fadbc', paddingX: 1, paddingY: 2 }}>
          <MenuItem>
            <ListItemText>Jira Service Management</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>Jira Product Discovery</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>Confluence</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>More Atlassian products</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}

export default More
