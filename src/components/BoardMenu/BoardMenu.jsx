import { Box, Divider, IconButton, List, ListItem, ListItemButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import ListIcon from '@mui/icons-material/List'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import SettingsIcon from '@mui/icons-material/Settings'
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import RemoveIcon from '@mui/icons-material/Remove'

const listMenuItem = [
  {
    id: 1,
    icon: <InfoOutlinedIcon/>,
    textMenu: 'About this board'
  },
  {
    id: 2,
    icon: <ListIcon/>,
    textMenu: 'Activity'
  },
  {
    id: 3,
    icon: <ArchiveOutlinedIcon/>,
    textMenu: 'Archived items'
  },
  {
    id: 4,
    icon: <SettingsIcon/>,
    textMenu: 'Settings'
  },
  {
    id: 5,
    icon: <SquareRoundedIcon/>,
    textMenu: 'Change background'
  },
  {
    id: 6,
    icon: <AutoFixHighIcon/>,
    textMenu: 'Custom Fields'
  },
  {
    id: 7,
    icon: <PhotoFilterIcon/>,
    textMenu: 'Automation'
  },
  {
    id: 8,
    icon: <RocketLaunchIcon/>,
    textMenu: 'Power-Ups'
  },
  {
    id: 9,
    icon: <BookmarkBorderIcon/>,
    textMenu: 'Labels'
  },
  {
    id: 10,
    icon: <EmojiEmotionsOutlinedIcon/>,
    textMenu: 'Stickers'
  },
  {
    id: 11,
    icon: <RemoveRedEyeOutlinedIcon/>,
    textMenu: 'Watch'
  },
  {
    id: 12,
    icon: <ContentCopyIcon/>,
    textMenu: 'Copy board'
  },
  {
    id: 13,
    icon : <MailOutlineRoundedIcon/>,
    textMenu: 'Email-to-board'
  },
  {
    id: 14,
    icon: <ShareOutlinedIcon/>,
    textMenu: 'Print, export and share'
  },
  {
    id: 15,
    icon: <RemoveIcon/>,
    textMenu: 'Close board'
  }
]

function BoardMenu({ handleOpen, open }) {
  return (
    <>
      <Box className='board-menu' sx={{ width: '339px', bgcolor: '#fff', position: 'absolute', top: 0, right: 0, bottom: 0, transform: open ? 'translateX(0)' : 'translateX(339px)' }} >
        <List>
          <ListItem sx={{ padding: '0 12px', justifyContent: 'space-between', alignContent: 'center', mb: '6px' }} >
            <IconButton sx={{ borderRadius: '8px' }} >
              <ChevronLeftRoundedIcon/>
            </IconButton>
            <Typography sx={{ fontSize: '16px', color: '#172b4d', fontWeight: '500' }}>Menu</Typography>
            <IconButton sx={{ borderRadius: '8px' }} onClick={handleOpen} >
              <CloseIcon sx={{ color: '#44546f' }} />
            </IconButton>
          </ListItem>
          <Divider variant='middle' />
          {listMenuItem.map(item => (
            <ListItemButton sx={{ padding: '0 12px' }} key={item.id}>
              {item.icon}
            </ListItemButton>
          ))}
        </List>
      </Box>
    </>
  )
}

export default BoardMenu
