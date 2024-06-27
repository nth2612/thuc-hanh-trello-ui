import { Box, IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useState } from 'react'

function ListColumn() {
  const [editText, setEditText] = useState(false)
  const [initText, setInitText] = useState('Ngọt band number one, abncam,scnnas,mcnkwhkcabscjkabsckjabsjkcbjkasbckbansc,nákjcn')
  return (
    <Box sx={{ mt: '12px', flexGrow: 1 }} >
      <Box sx={{ height: '100%' }} >
        <Box sx={{ padding: '2px 6px 8px', height: '100%' }} >
          <Box sx={{ paddingX: '6px', flexShrink: 0, height: '100%' }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '272px',
              pb: '8px',
              borderRadius: '12px',
              bgcolor: '#f1f2f4',
              boxShadow: '0px 1px 1px #091E4240, 0px 0px 1px #091E424F'
            }}>
              <Box sx={{ padding: '8px 8px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }} >
                <Box sx={{ flex: 1 }} >
                  <h2 onClick={() => setEditText(true)} style={{ display: editText ? 'none' : 'block', color: '#172b4d', fontSize: '14px', padding: '6px 8px 6px 12px', cursor: 'pointer', fontWeight: '500', lineHeight: '20px', overflowWrap: 'anywhere' }}>{initText}</h2>
                  {editText && <textarea name='' id='' value={initText} ></textarea>}
                </Box>
                <IconButton sx={{ borderRadius: '8px', flexShrink: 0, padding: '6px', '&:hover' : { bgcolor: '#091e4224' }, '&:hover .MuiSvgIcon-root' : { color: '#44546f' } }} >
                  <MoreHorizIcon sx={{ color: '#626f86' }} fontSize='small' />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ListColumn
