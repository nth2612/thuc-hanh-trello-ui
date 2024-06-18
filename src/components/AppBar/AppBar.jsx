import { Box } from '@mui/material'
import More from './Menu/More'
import Home from './Menu/Home'
import Workspaces from './Menu/Workspaces'
import Recent from './Menu/Recent'
import Starred from './Menu/Starred'
import Templates from './Menu/Templates'
import Create from './Menu/Create'
import Account from './Menu/Account'
import Notification from './Menu/Notification'
import Information from './Menu/Information'
import Search from './Menu/Search'

function AppBar() {
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
        <Search/>
        <Notification/>
        <Information/>
        <Account/>
      </Box>
    </Box>
  )
}

export default AppBar
