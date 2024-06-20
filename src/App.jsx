import { Box, Drawer, Popper } from '@mui/material'
import AppBar from './components/AppBar/AppBar'
import { useState } from 'react'

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
        <Box sx={{ width: '16px', minHeight: '100%', backgroundColor: 'red' }}>

        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ height: '60px', backgroundColor: '#005c91' }}></Box>
          <Box sx={{ backgroundColor: '#0079bf', height: '700px' }}></Box>
        </Box>
      </Box>
    </>
  )
}

export default App
