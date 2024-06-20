import { Avatar, Box, Button, Divider, Tooltip, Typography } from '@mui/material'
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


function BoardBar() {
  return (
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
        <Tooltip title='Change visibility'>
          <Button sx={{ paddingRight: 1.5, paddingLeft: 2 }} startIcon={<Groups2OutlinedIcon/>}>Workspace visible</Button>
        </Tooltip>
        <Tooltip title='Board'>
          <Button
            startIcon={<DashboardOutlinedIcon/>}
            sx={{
              backgroundColor: '#dcdfe4',
              color: '#172b4d',
              paddingX: 1.5,
              '&:hover' : { backgroundColor: 'white' }
            }}>
            Board
          </Button>
        </Tooltip>
        <Tooltip title='Customize views'>
          <Button sx={{ minWidth: 'unset' }}>
            <KeyboardArrowDownRoundedIcon />
          </Button>
        </Tooltip>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, '& .MuiButtonBase-root' : { paddingX: '12px' } }}>
        <Tooltip title='Power-Ups'>
          <Button sx={{ '& .MuiSvgIcon-root': { fontSize: '16px' } }} startIcon={<RocketLaunchOutlinedIcon/>}>Power-Ups</Button>
        </Tooltip>
        <Tooltip title='Automation'>
          <Button sx={{ '& .MuiSvgIcon-root': { fontSize: '18px' }, '& .MuiButton-startIcon' : { mr: '4px' } }} startIcon={<BoltIcon/>}>Automation</Button>
        </Tooltip>
        <Tooltip title='Filter cards F'>
          <Button startIcon={<FilterListIcon/>}>Filter</Button>
        </Tooltip>
        <Divider orientation='vertical' variant='middle' flexItem sx={{ borderColor: '#2976a3', margin: '8px 4px' }} />
        <Box width={36} height={36} borderRadius='50%' display='flex' justifyContent='center' position='relative' alignItems='center' sx={{ '&:hover' : { backgroundColor: 'rgba(255,255,255,0.3)' } }} >
          <Avatar src={myavt5} sx={{ width: '32px', height: '32px' }} />
          <KeyboardDoubleArrowUpOutlinedIcon sx={{ position: 'absolute', bottom: '-3px', right: '-3px', color: 'white', fontSize: '22px' }} />
        </Box>
        <Button
          startIcon={<GroupAddOutlinedIcon/>}
          sx={{
            backgroundColor: '#dcdfe4',
            color: '#172b4d',
            '&:hover' : { backgroundColor: 'white' }
          }}>
          Share
        </Button>
        <Button sx={{ minWidth: 'unset', padding: '6.25px !important' }}>
          <MoreHorizRoundedIcon />
        </Button>
      </Box>
    </Box>
  )
}

export default BoardBar
