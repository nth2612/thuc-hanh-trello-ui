import { Box, Divider, IconButton, List, ListItem, ListItemButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import ListIcon from '@mui/icons-material/List'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import SettingsIcon from '@mui/icons-material/Settings'
import SquareRoundedIcon from '@mui/icons-material/SquareRounded'
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
    icon: <InfoOutlinedIcon sx={{ color: '#44546f' }} fontSize='small' />,
    textMenu: 'About this board'
  },
  {
    id: 2,
    icon: <ListIcon sx={{ color: '#44546f' }} fontSize='small' />,
    textMenu: 'Activity'
  },
  {
    id: 3,
    icon: <ArchiveOutlinedIcon sx={{ color: '#44546f' }} fontSize='small' />,
    textMenu: 'Archived items'
  },
  {
    id: ''
  },
  {
    id: 4,
    icon: <SettingsIcon sx={{ color: '#44546f' }} fontSize='small' />,
    textMenu: 'Settings'
  },
  {
    id: 5,
    icon: <SquareRoundedIcon sx={{ color: '#0079bf' }} fontSize='small' />,
    textMenu: 'Change background'
  },
  {
    id: 6,
    icon: <AutoFixHighIcon sx={{ color: '#44546f' }} fontSize='small' />,
    textMenu: 'Custom Fields'
  },
  {
    id: 7,
    icon: <PhotoFilterIcon sx={{ color: '#44546f' }} fontSize='small' />,
    textMenu: 'Automation'
  },
  {
    id: 8,
    icon: <RocketLaunchIcon sx={{ color: '#44546f' }} fontSize='small' />,
    textMenu: 'Power-Ups'
  },
  {
    id: 9,
    icon: <BookmarkBorderIcon sx={{ color: '#44546f' }} fontSize='small' />,
    textMenu: 'Labels'
  },
  {
    id: 10,
    icon: <EmojiEmotionsOutlinedIcon sx={{ color: '#44546f' }} fontSize='small' />,
    textMenu: 'Stickers'
  },
  {
    id: ''
  },
  {
    id: 11,
    icon: <RemoveRedEyeOutlinedIcon sx={{ color: '#44546f' }} fontSize='small' />,
    textMenu: 'Watch'
  },
  {
    id: 12,
    icon: <ContentCopyIcon sx={{ color: '#44546f' }} fontSize='small' />,
    textMenu: 'Copy board'
  },
  {
    id: 13,
    icon : <MailOutlineRoundedIcon sx={{ color: '#44546f' }} fontSize='small' />,
    textMenu: 'Email-to-board'
  },
  {
    id: 14,
    icon: <ShareOutlinedIcon sx={{ color: '#44546f' }} fontSize='small' />,
    textMenu: 'Print, export and share'
  },
  {
    id: 15,
    icon: <RemoveIcon sx={{ color: '#44546f' }} fontSize='small' />,
    textMenu: 'Close board'
  }
]

function BoardMenu({ handleOpen }) {
  console.log('tao da duoc them vao')
  return (
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
      <Box sx={{ padding: '12px 12px 8px' }} >
        {listMenuItem.map(item => {
          if (item.id) {
            return (
              <ListItemButton sx={{ padding: '6px', borderRadius: '8px', mb: '4px' }} key={item.id}>
                {item.icon}
                <Typography sx={{ color: '#172b4d', ml: '12px' }} >{item.textMenu}</Typography>
              </ListItemButton>
            )
          }
          return (
            <Divider sx={{ my: '8px' }} key={Math.random()} />
          )
        })}
      </Box>
    </List>
  )
}

export default BoardMenu
