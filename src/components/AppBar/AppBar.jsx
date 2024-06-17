import { Box, Tooltip } from '@mui/material'
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

  const [searchText, setSearchText] = useState('')

  return (
    <Box sx={{
      p: 1,
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: '#0065a0',
      height: (theme) => theme.trello.appBarHeight
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
        <More/>
        <Home/>
        <Workspaces/>
        <Recent/>
        <Starred/>
        <Templates/>
        <Create/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap:1 }}>
        <Tooltip title='Search: /'>
          <TextField
            sx={{
              '&:hover' : { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
              '& input' : { paddingY: '4.5px' },
              '& fieldset, & .MuiInputBase-root:hover fieldset, & > .MuiOutlinedInput-root.Mui-focused > fieldset' : { borderColor: '#fff' },
              '& label, & input, & .MuiInputAdornment-root .MuiSvgIcon-root' : { color: 'white' }
            }}
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
                  sx={{ color: searchText ? 'white' : 'transparent', cursor: searchText ? 'pointer' : 'default' }}
                  onClick={() => setSearchText('')} />
              )
            }}
          />
        </Tooltip>
        <Tooltip title='Notifications'>
          <NotificationsOutlinedIcon sx={{ color: 'white' }} />
        </Tooltip>
        <Tooltip title='Information'>
          <HelpOutlineIcon sx={{ color: 'white' }} />
        </Tooltip>
        <Account/>
      </Box>
    </Box>
  )
}

export default AppBar
