import { Avatar, Box, Button, Tooltip, Typography } from '@mui/material'
import AppBar from './components/AppBar/AppBar'
import BoardBar from './components/BoardBar/BoardBar'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import { useState } from 'react'
import myavt from '~/assets/myavt5.png'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'

function App() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [openExpand, setOpenExpand] = useState(true)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <AppBar/>
      <Box sx={{ borderTop: '1px solid #297eb0', display: 'flex' }}>
        { openExpand
          ? <Box sx={{ width: '260px', minHeight: '100%', position: 'relative' }} >
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100%', height: '100%', overflow: 'auto' }}>
              <Box sx={{ backgroundColor: '#0066a0', display: 'flex', flexDirection: 'column', flex: 1, overflow: 'auto' }} >
                <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px 12px', borderBottom: '1px solid #ffffff29' }} >
                  <Box sx={{}} >
                    <Avatar src={myavt} sx={{ borderRadius: '4px', width: '32px', height: '32px' }} ></Avatar>
                  </Box>
                  <Box sx={{ flex: 1, mr: '4px', ml: '8px', color: '#fff' }}>
                    <Typography sx={{ fontWeight: '500' }} >My workspace</Typography>
                    <Typography fontSize='0.75rem' >Free</Typography>
                  </Box>
                  <Button sx={{ minWidth: 'unset', padding: '4px' }} onClick={() => setOpenExpand(false)} >
                    <KeyboardArrowLeftRoundedIcon/>
                  </Button>
                </Box>
                <Box sx={{ flex: 1 }} ></Box>
                <Box sx={{ borderTop: '1px solid #ffffff29', padding: '12px 16px 12px 12px' }}>
                  <Button
                    startIcon={<WorkOutlineIcon sx={{ ml: '6px' }}/>}
                    sx={{ fontWeight: 'unset',
                      color: '#fff',
                      background: 'linear-gradient(97.78deg, #6e5dc6 17.5%, #e774bb 113.39%)',
                      justifyContent: 'flex-start',
                      '&:hover' : { background: 'linear-gradient(270deg, #6e5dc6 0%, #172b4d 100%)' }
                    }}
                    fullWidth>
                      Try Premium free
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          : <Box sx={{ width: '16px', minHeight: '100%', position: 'relative' }}>
            <Tooltip title='Expand sidebar [' placement='top-end'>
              <button className='btn-expand-left' aria-describedby='exp-left' onClick={() => setOpenExpand(true)} >
                <span className='expand-left'>
                  <KeyboardArrowRightRoundedIcon sx={{ color: '#fff' }} />
                </span>
              </button>
            </Tooltip>
          </Box>
        }
        <Box sx={{ flexGrow: 1, borderLeft: '1px solid #298ec9' }}>
          <BoardBar/>
          <Box sx={{ backgroundColor: '#0079bf', height: (theme) => theme.trello.boardContentHeight }}></Box>
        </Box>
      </Box>
    </>
  )
}

export default App
