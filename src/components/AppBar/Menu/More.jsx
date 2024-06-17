import AppsIcon from '@mui/icons-material/Apps'
import atlas from '~/assets/atlass.svg?react'
import trello from '~/assets/trello.svg?react'
import { useState } from 'react'
import { Box, List, ListSubheader, SvgIcon, Button, MenuItem, Typography, ListItemIcon, ListItemText, Menu, ListItemButton } from '@mui/material'
import ExploreIcon from '@mui/icons-material/Explore'

function More() {
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
        <List subheader={
          <ListSubheader component='div' sx={{ color: '#626f86' }}>YOUR APPS</ListSubheader>
        }>
          <ListItemButton>
            <Box sx={{ backgroundColor: '#0052cc', width: '32px', height: '32px', borderRadius: '8px', mr: 1 }}>
              <SvgIcon component={atlas} />
            </Box>
            <ListItemText primary='Atlassian Home' />
          </ListItemButton>
          <MenuItem>
            <ListItemIcon>
              <SvgIcon component={trello} sx={{ fontSize: '32px', color: '#0052cc' }} />
            </ListItemIcon>
            <ListItemText>Trello</ListItemText>
          </MenuItem>
          <ListSubheader component='div' sx={{ color: '#44546f' }} >RECOMMEND FOR YOUR SYSTEM</ListSubheader>
          <ListItemButton sx={{ paddingY: 0 }} >
            <Box sx={{ backgroundColor: '#091E420F', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1 }}>
              <img src='https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/jira-service-management/icons/blue.svg' />
            </Box>
            <ListItemText primary='Jira Service Management' secondary={
              <Typography sx={{ fontSize: '11px', color : '#626f86' }}>Collaborative IT service management</Typography>
            } />
          </ListItemButton>
          <ListItemButton sx={{ paddingY: 0 }} >
            <Box sx={{ backgroundColor: '#091E420F', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1 }}>
              <img src='https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/jira-product-discovery/icons/blue.svg' />
            </Box>
            <ListItemText primary='Jira Product Discovery' secondary={
              <Typography sx={{ fontSize: '11px', color : '#626f86' }}>Prioritize, collaborate, and deliver new ideas</Typography>
            } />
          </ListItemButton>
          <ListItemButton sx={{ paddingY: 0 }}>
            <Box sx={{ backgroundColor: '#091E420F', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1 }}>
              <img src='https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/confluence/icons/blue.svg' />
            </Box>
            <ListItemText primary='Confluence' secondary={
              <Typography sx={{ fontSize: '11px', color : '#626f86' }}>Create, collaborate, and organize your work</Typography>
            } />
          </ListItemButton>
          <ListItemButton>
            <Box sx={{ backgroundColor: '#091E420F', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1 }}>
              <ExploreIcon fontSize='medium'/>
            </Box>
            <ListItemText primary='More Atlassian products'/>
          </ListItemButton>
        </List>
      </Menu>
    </>
  )
}

export default More
