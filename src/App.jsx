import { Box, Drawer, useMediaQuery } from '@mui/material'
import AppBar from './components/AppBar/AppBar'
import BoardBar from './components/BoardBar/BoardBar'
import ExpandLeft from './components/ExpandLeft/ExpandLeft'
import { useEffect, useRef, useState } from 'react'
import BoardMenu from './components/BoardMenu/BoardMenu'
import { mockData } from './apis/mock-data'
import ListColumn from './components/ListColumn/ListColumn'
// import { DndContext } from '@dnd-kit/core'
// import { useSensors, useSensor, MouseSensor, TouchSensor } from '@dnd-kit/core'

function App() {
  // const mouseSensor = useSensor(MouseSensor, {
  //   // Di chuyển 10px mới thực hiện hàm handleDrag, tránh click
  //   activationConstraint : {
  //     distance: 10
  //   }
  // })
  // const touchSensor = useSensor(TouchSensor, {
  //   // Nhấn giữ trong vòng 250ms và di chuyển khoảng 5px thì mới gọi hàm handleDrag
  //   activationConstraint : {
  //     delay: 250,
  //     tolerance: 500
  //   }
  // })
  // const sensors = useSensors(mouseSensor, touchSensor)
  const boardBarRef = useRef(null)
  const removeMargin = useMediaQuery('(min-width: 751px)')
  const [open, setOpen] = useState(false)
  const [boardBarHeight, setBoardBarHeight] = useState(0)
  const handleOpen = () => {
    setOpen(!open)
  }
  const setOpenToFalse = () => {
    setOpen(false)
  }
  useEffect(() => {
    if (boardBarRef.current) {
      setBoardBarHeight(boardBarRef.current.offsetHeight)
    }
  }, [boardBarHeight])
  return (
    <>
      <AppBar/>
      <Box sx={{ borderTop: '1px solid #297eb0', display: 'flex', position: 'relative' }}>
        <ExpandLeft/>
        <Box sx={{ flexGrow: 1, borderLeft: '1px solid #298ec9', overflow: 'auto', mr: open && removeMargin ? '339px' : '0px' }}>
          <BoardBar refBoardBar={boardBarRef} handleOpen={handleOpen} open={open} nameBoard={mockData.board.title} />
          {/* <DndContext sensors={sensors}> */}
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
            <ListColumn boardBarHeight={boardBarHeight} />
          </Box>
          {/* </DndContext> */}
        </Box>
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
