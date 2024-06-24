import { Box } from '@mui/material'
import AppBar from './components/AppBar/AppBar'
import BoardBar from './components/BoardBar/BoardBar'
import ExpandLeft from './components/ExpandLeft/ExpandLeft'
import { useState } from 'react'
import BoardMenu from './components/BoardMenu/BoardMenu'

function App() {
  const [open, setOpen] = useState(true)
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <>
      <AppBar/>
      <Box sx={{ borderTop: '1px solid #297eb0', display: 'flex', position: 'relative' }}>
        <ExpandLeft/>
        <Box sx={{ flexGrow: 1, borderLeft: '1px solid #298ec9', overflow: 'auto', mr: open ? '339px' : '0px' }}>
          <BoardBar handleOpen={handleOpen} open={open} />
          <Box sx={{ backgroundColor: '#0079bf', display: 'flex', flexDirection: 'row', position: 'relative', overflowX: 'auto', overflowY: 'hidden', height: (theme) => theme.trello.boardContentHeight }}>
            <Box sx={{ marginX: '40px', width: '400px', bgcolor: 'white', flexShrink: 0 }} >Xin chao tat ca cac be</Box>
            <Box sx={{ marginX: '40px', width: '400px', bgcolor: 'white', flexShrink: 0 }} >Xin chao tat ca cac be</Box>
            <Box sx={{ marginX: '40px', width: '400px', bgcolor: 'white', flexShrink: 0 }} >Xin chao tat ca cac be</Box>
            <Box sx={{ marginX: '40px', width: '400px', bgcolor: 'white', flexShrink: 0 }} >Xin chao tat ca cac be</Box>
            <Box sx={{ marginX: '40px', width: '400px', bgcolor: 'white', flexShrink: 0 }} >Xin chao tat ca cac be</Box>
          </Box>
        </Box>
        <BoardMenu handleOpen={handleOpen} open={open} />
      </Box>
    </>
  )
}

export default App
