import { Box, Button, Divider, Tooltip, Typography, useMediaQuery } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import WorkspaceVisible from './Menu/WorkspaceVisible'
import CustomizeView from './Menu/CustomizeView'
import PowerUp from './Menu/PowerUp'
import Automation from './Menu/Automation'
import Share from './Menu/Share'
import Members from './Menu/Members'

function BoardBar({ handleOpen, open }) {
  const responsiveText = useMediaQuery('(min-width: 1541px)')
  const combineCustom = useMediaQuery('(min-width: 1281px)')
  const responsiveFilter = useMediaQuery('(min-width: 901px)')
  const removeMargin = useMediaQuery('(min-width: 751px)')
  return (
    <Box sx={{
      height: 'auto',
      // height: (theme) => theme.trello.boardBarHeight,
      backgroundColor: '#005c91',
      display: 'flex',
      justifyContent : 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '12px 10px 12px 16px'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Typography variant='span' sx={{ paddingX: '10px', fontSize: '1.125rem', fontWeight: 'bold', color: 'white' }}>Mất tích</Typography>
        <Box sx={{ width: '36.5px', height: '36.5px', padding: '6.25px', color: 'white', cursor: 'pointer', borderRadius: 1, '&:hover' : { backgroundColor: 'rgba(255,255,255,0.2)' } }}>
          <StarRoundedIcon/>
        </Box>
        <WorkspaceVisible hideText={responsiveText} />
        { combineCustom &&
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
        </Tooltip>}
        <CustomizeView combine={combineCustom} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, marginLeft: 'auto', '& .MuiButtonBase-root' : { paddingX: '12px' } }}>
        <PowerUp hideText={responsiveText} />
        <Automation hideText={responsiveText} />
        <Tooltip title='Filter cards F'>
          <Button
            sx={{ minWidth: 'unset', py: !responsiveFilter ? '8.25px' : undefined, '& > .MuiButton-icon' : { margin: !responsiveFilter ? '0' : undefined } }}
            startIcon={<FilterListIcon/>}>{ responsiveFilter && <span>Filters</span>}</Button>
        </Tooltip>
        <Divider orientation='vertical' variant='middle' flexItem sx={{ borderColor: '#2976a3', margin: '8px 4px' }} />
        <Members/>
        <Share/>
        <Button sx={{ minWidth: 'unset', padding: '6.25px !important', display: open ? 'none' : 'inline-flex' }} onClick={handleOpen} >
          <MoreHorizRoundedIcon />
        </Button>
      </Box>
    </Box>
  )
}

export default BoardBar
