import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HEIGHT_HEADER = '50px'
const COLUMN_HEIGHT_FOOTER = '56px'

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
    MuiList:{
      styleOverrides:{
        root:{
          width: '304px'
        }
      }
    },
    MuiListItemText:{
      styleOverrides:{
        root:{
          fontSize: '0.875rem',
          fontWeight: 'bold'
        }
      }
    },
    MuiPaper: {
      styleOverrides:{
        root:{
          top: `${APP_BAR_HEIGHT} !important`
        }
      }
    },
    MuiButton: {
      styleOverrides:{
        root:{
          textTransform: 'initial'
        }
      }
    }
  },
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEIGHT_HEADER,
    columnFooterHeight: COLUMN_HEIGHT_FOOTER
  }
})

export default theme