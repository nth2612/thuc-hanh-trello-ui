import { Box, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

function BoardMenu({ handleOpen, open }) {
  return (
    <>
      <Box sx={{ width: '339px', bgcolor: '#fff', position: 'absolute', top: 0, right: 0, bottom: 0, transform: open ? 'translateX(0)' : 'translateX(339px)' }} >
        <IconButton onClick={handleOpen} >
          <CloseIcon sx={{ color: '#44546f' }} />
        </IconButton>
      </Box>
    </>
  )
}

export default BoardMenu
