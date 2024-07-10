import AddIcon from '@mui/icons-material/Add'
import { Box, Button, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

function AddColumn() {
  const [openInput, setOpenInput] = useState(false)
  return (
    <Box sx={{ paddingX: '6px', flexShrink: 0, height: '100%' }}>
      {openInput ?
        <form style={{ width: '272px', borderRadius: '12px', padding: '8px', backgroundColor: '#f1f2f4' }} >
          <textarea autoFocus placeholder='Enter list title..' style={{ height: '32px', borderRadius: '4px' }} onBlur={() => setOpenInput(false)} ></textarea>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', mt: '8px' }} >
            <Button onClick={() => console.log('hihihi')} sx={{ bgcolor: '#0c66e4', color: '#fff', fontSize: '14px', p: '6px 12px', lineHeight: '20px', '&:hover' : { bgcolor: '#0055cc' } }} >Add list</Button>
            <IconButton sx={{ padding: '6px', borderRadius: '3px', color: '#172b4d', '&:hover' : { bgcolor: '#091e4224' } }} >
              <CloseIcon fontSize='small' />
            </IconButton>
          </Box>
        </form>
        : <Button
          startIcon={<AddIcon />}
          onClick={() => setOpenInput(true)}
          sx={{
            width: '272px',
            justifyContent: 'flex-start',
            padding: '12px',
            bgcolor: '#ffffff3d',
            borderRadius: '12px',
            color: '#fff',
            fontSize: '14px',
            '& .MuiButton-startIcon' : { ml: 0 },
            '&:hover' : { bgcolor: '#a6c5e229' }
          }} >Add another list</Button>
      }
    </Box>
  )
}

export default AddColumn
