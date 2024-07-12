import { Box, Button, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function AddACard({ setIsAddingCard, setRawCard, cardOrderIds }) {
  const textareaRef = useRef(null)
  const formRef = useRef(null)
  const [openInput, setOpenInput] = useState(false)
  const [nameCard, setNameCard] = useState('')
  useEffect(() => {
    const handleBlurForm = (event) => {
      if (formRef.current) {
        const clickedOutside = formRef.current.contains(event.target)
        if (!clickedOutside) {
          setOpenInput(false)
        }
      }
    }
    if (openInput) {
      document.addEventListener('click', handleBlurForm)
    }
    return () => {
      if (openInput) {
        document.removeEventListener('click', handleBlurForm)
      }
    }
  }, [openInput])
  const handleClickTextarea = (event) => {
    event.stopPropagation()
    textareaRef.current.focus()
  }
  const blurTextarea = () => {
    textareaRef.current.blur()
  }
  const hideTextarea = (event) => {
    event.stopPropagation()
    setNameCard('')
    setIsAddingCard(false)
  }
  const addNewColumnByButton = (event) => {
    event.stopPropagation()
    addNewCard()
  }
  const addNewCard = () => {
    if (nameCard !== '') {
      setRawCard(prev => {
        const newCard = {
          _id : uuidv4(),
          boardId: 'board-id-02',
          columnId: '',
          title: nameCard,
          memberIds: []
        }
        cardOrderIds.push(newCard._id)
        setNameCard('')
        textareaRef.current.focus()
        return [...prev, newCard]
      })
    }
  }
  const handleChange = (input) => {
    setNameCard(input.target.value)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault() // Ngăn điền thêm enter
      addNewCard()
    }
  }
  return (
    <form ref={formRef} onClick={blurTextarea}
      // style={{ borderRadius: '12px', backgroundColor: '#f1f2f4' }}
    >
      <textarea value={nameCard} ref={textareaRef} autoFocus placeholder='Enter a title for this card...' style={{ height: '56px', fontWeight: 'unset', borderRadius: '8px', boxShadow:  '0px 1px 1px #091e4240, 0px 0px 1px #091e424f' }}
        onClick={handleClickTextarea}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></textarea>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', mt: '8px' }} >
        <Button onClick={addNewColumnByButton} sx={{ bgcolor: '#0c66e4', color: '#fff', fontSize: '14px', p: '6px 12px', lineHeight: '20px', '&:hover' : { bgcolor: '#0055cc' } }} >Add card</Button>
        <IconButton onClick={hideTextarea} sx={{ padding: '6px', borderRadius: '3px', color: '#172b4d', '&:hover' : { bgcolor: '#091e4224' } }} >
          <CloseIcon fontSize='small' />
        </IconButton>
      </Box>
    </form>
  )
}

export default AddACard
