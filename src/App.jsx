import { Avatar, Box, Button, Divider, Tooltip, Typography } from '@mui/material'
import AppBar from './components/AppBar/AppBar'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined'
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined'
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import myavt5 from '~/assets/myavt5.png'
import BoardBar from './components/BoardBar/BoardBar'

function App() {
  return (
    <>
      <AppBar/>
      <Box sx={{ borderTop: '1px solid #297eb0', display: 'flex' }}>
        <Box sx={{ width: '16px', minHeight: '100%', backgroundColor: '#0066a0' }}>

        </Box>
        <Box sx={{ flexGrow: 1, borderLeft: '1px solid #298ec9' }}>
          <BoardBar/>
          <Box sx={{ backgroundColor: '#0079bf', height: (theme) => theme.trello.boardContentHeight }}></Box>
        </Box>
      </Box>
    </>
  )
}

export default App
