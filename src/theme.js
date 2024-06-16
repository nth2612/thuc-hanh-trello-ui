import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  colorSchemes: {
    light:{
      palette:{
        primary:{
          main: '#f4f4f4'
        }
      }
    },
    dark:{
      palette:{
        primary:{
          main: '#0e0e0e'
        }
      }
    }
  },
  components: {

  },
  trello: {

  }
})

export default theme