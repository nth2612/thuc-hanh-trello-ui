import { Box, Button } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function Workspaces() {
  return (
    <Box>
      <Button
        endIcon={<ExpandMoreIcon/>}
      >
        Workspaces
      </Button>
    </Box>
  )
}

export default Workspaces
