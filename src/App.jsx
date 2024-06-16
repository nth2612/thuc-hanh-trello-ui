import { Box } from '@mui/material'
import AppBar from './components/AppBar/AppBar'

function App() {
  return (
    <>
      <AppBar/>
      <Box sx={{
        width: '400px',
        height: '300px',
        backgroundColor: (theme) => theme.palette.primary.main
      }}>
        Tôi là một thẻ div
      </Box>
    </>
  )
}

export default App
