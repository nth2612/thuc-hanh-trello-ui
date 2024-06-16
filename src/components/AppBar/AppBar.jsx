import { Box } from '@mui/material'
import { useState } from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import TextField from '@mui/material/TextField'
import { InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import More from './Menu/More'
import Home from './Menu/Home'
import Workspaces from './Menu/Workspaces'
import Recent from './Menu/Recent'
import Starred from './Menu/Starred'
import Templates from './Menu/Templates'
import Create from './Menu/Create'
import Account from './Menu/Account'

function AppBar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [searchText, setSearchText] = useState('')
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box sx={{
      p: 1,
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: '#005485'
    }}>
      <Box sx={{ display: 'flex', alignContent: 'center' }}>
        <More/>
        <Home/>
        <Workspaces/>
        <Recent/>
        <Starred/>
        <Templates/>
        <Create/>
      </Box>
      <Box>
        <TextField
          value={searchText}
          id="input-with-sx"
          label="Search"
          variant="outlined"
          size='small'
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            startAdornment:(
              <InputAdornment position='start' >
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment:(
              <CloseIcon
                sx={{ color: searchText ? 'red' : 'transparent', cursor: searchText ? 'pointer' : 'default' }}
                onClick={() => setSearchText('')} />
            )
          }}
        />
        <NotificationsOutlinedIcon/>
        <HelpOutlineIcon/>
        <Account/>
      </Box>
    </Box>
  )
}

export default AppBar
