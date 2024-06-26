import { Box, Drawer, useMediaQuery } from '@mui/material'
import AppBar from './components/AppBar/AppBar'
import BoardBar from './components/BoardBar/BoardBar'
import ExpandLeft from './components/ExpandLeft/ExpandLeft'
import { useState } from 'react'
import BoardMenu from './components/BoardMenu/BoardMenu'
import { mockData } from './apis/mock-data'
import ListColumn from './components/ListColumn/ListColumn'

function App() {
  const removeMargin = useMediaQuery('(min-width: 751px)')
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  const setOpenToFalse = () => {
    setOpen(false)
  }
  return (
    <>
      <AppBar/>
      <Box sx={{ borderTop: '1px solid #297eb0', display: 'flex', position: 'relative' }}>
        <ExpandLeft/>
        <Box sx={{ flexGrow: 1, borderLeft: '1px solid #298ec9', overflow: 'auto', mr: open && removeMargin ? '339px' : '0px' }}>
          <BoardBar handleOpen={handleOpen} open={open} nameBoard={mockData.board.title} />
          <Box sx={{
            backgroundColor: '#0079bf',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            overflowX: 'auto',
            overflowY: 'hidden',
            height: (theme) => theme.trello.boardContentHeight,
            scrollbarColor: '#fff6 #00000026'
          }}>
            <ListColumn/>
          </Box>
        </Box>
        {/* <Box className='board-menu' sx={{ width: '339px', bgcolor: '#fff', position: 'absolute', top: 0, right: 0, bottom: 0, transform: open ? 'translateX(0)' : 'translateX(339px)' }} >
          <Box>
            {open && <BoardMenu handleOpen={handleOpen} />}
          </Box>
        </Box> */}
        <Drawer anchor='right' open={open} onClose={() => setOpen(false)} sx={{ '& .MuiPaper-root' : { top: '58px', width: '339px', borderRadius: 'unset', transition: 'transform,width 100ms ease-in' } }} >
          <Box sx={{ height: '100%' }} >
            {open && <BoardMenu handleOpen={setOpenToFalse} />}
          </Box>
        </Drawer>
      </Box>
    </>
  )
}

export default App
