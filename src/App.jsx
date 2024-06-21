import { Box, Popover, Tooltip, Typography } from '@mui/material'
import AppBar from './components/AppBar/AppBar'
import BoardBar from './components/BoardBar/BoardBar'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'
import { useState } from 'react';

function App() {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined
  return (
    <>
      <AppBar/>
      <Box sx={{ borderTop: '1px solid #297eb0', display: 'flex' }}>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}>
          <Typography>hihi</Typography>
        </Popover>
        <Box sx={{ width: '16px', minHeight: '100%', position: 'relative' }}>
          <Tooltip title='Expand sidebar [' placement='top-end'>
            <button className='btn-expand-left' aria-describedby='exp-left' onClick={handleClick} >
              <span className='expand-left'>
                <KeyboardArrowRightRoundedIcon sx={{ color: '#fff' }} />
              </span>
            </button>
          </Tooltip>
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
