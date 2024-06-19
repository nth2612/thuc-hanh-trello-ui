import { Divider, Link, List, ListItem, ListItemButton, ListItemText, Menu, Tooltip, Typography } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'

const listAnchor = [
  {
    id: 1,
    text_an: 'Pricing'
  },
  {
    id: 2,
    text_an: 'Apps'
  },
  {
    id: 3,
    text_an: 'Blog'
  },
  {
    id: 4,
    text_an: 'Privacy'
  },
  {
    id: 5,
    text_an: 'Notice at Collection'
  },
  {
    id: 6,
    text_an: 'More...'
  }
]

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
        sx={{
          '& .MuiPaper-root' : { width: '384px', padding: 1.5 },
          '& > .MuiPaper-root > .MuiList-root' : { padding: '0 12px' }
        }}
        id='information-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby' : 'information-btn'
        }}
      >
        <List sx={{ padding: 0 }} >
          <img src='https://trello.com/assets/3e2ea266f7e19b3e13a9.png' style={{ maxWidth: '100%', width: '100%', borderRadius: '3px', display: 'block' }} />
          <ListItemButton>
            <ListItemText sx={{ textAlign: 'center', m: 0, fontWeight: '500' }} primary={
              <Typography variant='span' fontSize='1rem' color='#172b4d'>It’s easy to get your team up and running with Trello playbooks</Typography>
            } />
          </ListItemButton>
          <ListItemText sx={{ textAlign: 'center', marginY: 1 }} primary={
            <Link href='/' color='#0c66e4' underline='hover'>Get a new tip.</Link>
          }/>
          <Divider/>
          <List sx={{ textAlign: 'center', paddingBottom: 0 }}>
            {listAnchor.map(an => (
              <ListItem
                key={an.id}
                sx={{
                  display: 'inline-block',
                  width: 'unset',
                  borderRadius: '3px',
                  padding: '6px 8px',
                  color: '#44546f',
                  fontSize: '0.875rem',
                  margin: '0px 1px 2px',
                  '&:hover' : { backgroundColor: '#091E4224', cursor: 'pointer' }
                }}>
                {an.text_an}
              </ListItem>
            ))}
          </List>
        </List>
      </Menu>
    </>
  )
}

export default Information
