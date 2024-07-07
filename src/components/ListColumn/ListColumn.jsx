import { Box, Button, IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useEffect, useRef, useState } from 'react'
import CopyAllIcon from '@mui/icons-material/CopyAll'
import AddIcon from '@mui/icons-material/Add'

function ListColumn() {
  const textareaRef = useRef(null)
  const h2Ref = useRef(0)
  const [editText, setEditText] = useState(false)
  const [initText, setInitText] = useState('Mất tích trong đám đông giao thừa, pháo hoa cháy trong mưa, soi hết đoàn người')
  const [h2Height, setH2Height] = useState(0)
  const handleClickH2 = () => {
    setEditText(true)
    setH2Height(h2Ref.current.offsetHeight)
  }
  const handleChangeEditText = (e) => {
    setInitText(e.target.value)
  }
  const handleBlur = () => {
    setEditText(false)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setEditText(false)
      setH2Height(h2Ref.current.offsetHeight)
    }
  }
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.select()
    }
  }, [editText])
  return (
    <Box sx={{ mt: '12px', flexGrow: 1 }} >
      <Box sx={{ height: '100%' }} >
        <Box sx={{ padding: '2px 6px 8px', height: '100%', display: 'flex', flexDirection: 'row' }} >
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
                  <h2 ref={h2Ref} onClick={handleClickH2} style={{ display: editText ? 'none' : 'block', letterSpacing: 'normal', color: '#172b4d', fontSize: '14px', padding: '6px 8px 6px 12px', cursor: 'pointer', fontWeight: '500', lineHeight: '20px', overflowWrap: 'anywhere' }}>{initText}</h2>
                  <textarea
                    style={{ height: `${h2Height}px`, display: editText ? 'block' : 'none' }}
                    ref={textareaRef}
                    onChange={handleChangeEditText}
                    onKeyDown={handleKeyDown}
                    name='' id=''
                    autoFocus
                    onBlur={handleBlur}
                    value={initText} >
                  </textarea>
                </Box>
                <IconButton sx={{ borderRadius: '8px', flexShrink: 0, padding: '6px', '&:hover' : { bgcolor: '#091e4224' }, '&:hover .MuiSvgIcon-root' : { color: '#44546f' } }} >
                  <MoreHorizIcon sx={{ color: '#626f86' }} fontSize='small' />
                </IconButton>
              </Box>
              <Box sx={{ height: '8px', mb: '-2px' }} ></Box>
              <Box sx={{ p: '2px 4px', mx: '4px', overflowX: 'hidden', overflowY: 'auto', flexDirection: 'column', rowGap: '8px', display: 'flex', flex: '1 1 auto' }} >
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
                <Box>Xin chào</Box>
              </Box>
              <Box sx={{ padding: '8px 8px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', columnGap: '4px' }} >
                <Button startIcon={<AddIcon/>} sx={{ color: '#44546f', justifyContent: 'flex-start', lineHeight: 1, '&:hover' : { bgcolor: '#091e4224', color: '#172b4d' } }} fullWidth >Add a card</Button>
                <IconButton sx={{ borderRadius: '8px', '&:hover' : { bgcolor: '#091e4224', color: '#172b4d' } }} >
                  <CopyAllIcon sx={{ fontSize: '16px' }} />
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
