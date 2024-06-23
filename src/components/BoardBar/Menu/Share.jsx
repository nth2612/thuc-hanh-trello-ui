import { Box, Button, IconButton, Modal, TextField, Typography } from '@mui/material'
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '8px',
  backgroundColor: '#fff',
  padding: '20px',
  width: '590px'
}

function Share() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Button
        onClick={handleOpen}
        startIcon={<GroupAddOutlinedIcon/>}
        sx={{
          backgroundColor: '#dcdfe4',
          color: '#172b4d',
          '&:hover' : { backgroundColor: 'white' }
        }}>
        Share
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-share-board"
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: 'rgba(0,0,0,0.75)'
            }
          }
        }}
      >
        <Box id='modal-share-board' sx={styleModal} >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '16px' }} >
            <Typography sx={{ color: '#172b4d', fontSize: '20px' }} >Share board</Typography>
            <IconButton onClick={handleClose} >
              <CloseIcon sx={{ color: '#44546f' }} />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', mb: '16px' }} >
            <TextField size='small' placeholder='Email address or name' sx={{ flex: 1 }} />
            <Button sx={{ mx: '8px', bgcolor: '#091e420f', color: '#172b4d', '&:hover' : { bgcolor: '#091e4224' } }} endIcon={<KeyboardArrowDownIcon/>} >Member</Button>
            <Button>Share</Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default Share
