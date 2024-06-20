import { Box } from '@mui/material'
import AppBar from './components/AppBar/AppBar'
import BoardBar from './components/BoardBar/BoardBar'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'

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
