import { Box, Button, Drawer, Popper, Typography } from '@mui/material'
import AppBar from './components/AppBar/AppBar'
import { useState } from 'react'
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

function App() {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined
  return (
    <>
      <AppBar/>
      <Box sx={{ borderTop: '1px solid #297eb0', display: 'flex' }}>
        {/* <button aria-describedby={id} type="button" onClick={handleClick}>
          Toggle Popper
        </button>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
            The content of the Popper.
          </Box>
        </Popper> */}
        <Box sx={{ width: '16px', minHeight: '100%', backgroundColor: '#0066a0' }}>

        </Box>
        <Box sx={{ flexGrow: 1, borderLeft: '1px solid #298ec9' }}>
          <Box sx={{
            height: (theme) => theme.trello.boardBarHeight,
            backgroundColor: '#005c91',
            display: 'flex',
            justifyContent : 'space-between',
            alignItems: 'center',
            padding: '12px 10px 12px 16px'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Typography variant='span' sx={{ paddingX: '10px', fontSize: '1.125rem', fontWeight: 'bold', color: 'white' }}>My workspace 1</Typography>
              <Box sx={{ width: '36.5px', height: '36.5px', padding: '6.25px', color: 'white', cursor: 'pointer', borderRadius: 1, '&:hover' : { backgroundColor: 'rgba(255,255,255,0.2)' } }}>
                <StarRoundedIcon/>
              </Box>
              <Button startIcon={<Groups2OutlinedIcon/>}>Workspace visible</Button>
              <Button startIcon={<DashboardOutlinedIcon/>} sx={{ backgroundColor: '#dcdfe4', color: '#172b4d', paddingX: 1.5, '&:hover' : { backgroundColor: 'white' } }}>Board</Button>
              <Button sx={{ minWidth: 'unset' }}>
                <KeyboardArrowDownRoundedIcon />
              </Button>
            </Box>
            <Box>
              <Button sx={{ '& .MuiSvgIcon-root': { fontSize: '16px' } }} startIcon={<RocketLaunchOutlinedIcon/>}>Power-Ups</Button>
              <Button sx={{ '& .MuiSvgIcon-root': { fontSize: '18px' } }} startIcon={<BoltIcon/>}>Automation</Button>
              <Button startIcon={<FilterListIcon/>}>Filter</Button>
              <Button startIcon={<GroupAddOutlinedIcon/>}>Share</Button>
              <MoreHorizRoundedIcon/>
            </Box>
          </Box>
          <Box sx={{ backgroundColor: '#0079bf', height: (theme) => theme.trello.boardContentHeight }}></Box>
        </Box>
      </Box>
    </>
  )
}

export default App
