import { Button } from '@mui/material'

function Create() {
  return (
    <Button
      variant='contained'
      size='small'
      sx={{
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: 'white',
        paddingY: '7px',
        '&:hover' : { backgroundColor: 'rgba(255,255,255,0.4)', boxShadow: 'unset' },
        boxShadow: 'unset'
      }}
    >
      Create
    </Button>
  )
}

export default Create
