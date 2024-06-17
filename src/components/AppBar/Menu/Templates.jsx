import { Avatar, Box, Button, Divider, List, ListItemAvatar, ListItemButton, ListItemText, ListSubheader, Menu, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import myavt3 from '~/assets/myavt3.png'

function Templates() {
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
        endIcon={<ExpandMoreIcon/>}
        id='workspace-btn'
        aria-controls={open ? 'menu-workspace' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Templates
      </Button>
      <Menu
        sx={{
          '& .MuiPaper-root' : {
            borderRadius: '8px'
          },
          '& > .MuiPaper-root > .MuiList-root' : {
            padding: 0
          }
        }}
        id='menu-workspace'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'workspace-btn'
        }}>
        <List>
          <Box sx={{ height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography>Havent finished coding yet</Typography>
          </Box>
        </List>
      </Menu>
    </>
  )
}

export default Templates
