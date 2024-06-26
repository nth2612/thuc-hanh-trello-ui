import { Avatar, Box, Button, IconButton, Link, Modal, TextField, Typography } from '@mui/material'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import InsertLinkIcon from '@mui/icons-material/InsertLink'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const textCantWrite = 'Tuấn Hải (you)'
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
        startIcon={<PersonAddAltIcon sx={{ fontSize: '16px !important' }} />}
        sx={{
          lineHeight: 1,
          backgroundColor: '#dcdfe4',
          color: '#172b4d',
          py: '8px',
          '&:hover' : { backgroundColor: 'white' },
          '& .MuiButton-icon' : { ml: 0, mr: '4px' }
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '16px', alignItems: 'center' }} >
            <Typography sx={{ color: '#172b4d', fontSize: '20px' }} >Share board</Typography>
            <IconButton onClick={handleClose} >
              <CloseIcon sx={{ color: '#44546f' }} />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', mb: '16px' }} >
            <TextField size='small' placeholder='Email address or name' sx={{ flex: 1, '& .MuiInputBase-input:focus fieldset' : { borderColor: '#388bff' } }} />
            <Button sx={{ mx: '8px', bgcolor: '#091e420f', color: '#172b4d', padding: '4px 10px', '&:hover' : { bgcolor: '#091e4224' } }} endIcon={<KeyboardArrowDownIcon sx={{ mr: 0 }} />} >Member</Button>
            <Button sx={{ bgcolor: '#0c66e4', color: '#fff', '&:hover' : { bgcolor: '#0055cc' } }} >Share</Button>
          </Box>
          <Box>
            <Box sx={{ pt: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
              <Box sx={{ display: 'flex', alignItems: 'center' }} >
                <Box sx={{ width: '32px', height: '32px', padding: '4px', bgcolor: '#091e420f', borderRadius: '4px' }}>
                  <InsertLinkIcon/>
                </Box>
                <Box sx={{ ml: '12px' }}>
                  <Typography sx={{ color: '#172b4d' }} >Anyone with the board share link</Typography>
                  <Link underline='hover' sx={{ color: '#0c66e4', fontWeight: '600', fontSize: '12px' }} >Copy link</Link>
                </Box>
              </Box>
              <Button sx={{ mx: '8px', maxHeight: '32px', bgcolor: '#091e420f', color: '#172b4d', padding: '4px 10px', '&:hover' : { bgcolor: '#091e4224' } }} endIcon={<KeyboardArrowDownIcon sx={{ mr: 0 }} />} >Can join as member</Button>
            </Box>
            <Box sx={{ pt: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
              <Box sx={{ display: 'flex', alignItems: 'center' }} >
                <Avatar sx={{ width: '32px', height: '32px' }} >H</Avatar>
                <Box sx={{ ml: '12px' }}>
                  <Typography sx={{ color: '#172b4d' }} >{textCantWrite}</Typography>
                  <Typography sx={{ color: '#44546f', fontWeight: 'unset', fontSize: '12px' }} >@tunhi • Workspace guest</Typography>
                </Box>
              </Box>
              <Button sx={{ mx: '8px', maxHeight: '32px', bgcolor: '#091e420f', color: '#172b4d', padding: '4px 10px', '&:hover' : { bgcolor: '#091e4224' } }} endIcon={<KeyboardArrowDownIcon sx={{ mr: 0 }} />} >Admin</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default Share
