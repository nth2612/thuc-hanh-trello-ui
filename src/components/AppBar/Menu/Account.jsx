import Avatar from '@mui/material/Avatar'
import myavt from '~/assets/myavt5.png'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

function Account() {
  return (
    <>
      <Tooltip title="Account">
        <IconButton
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }} src={myavt} ></Avatar>
        </IconButton>
      </Tooltip>
    </>
  )
}

export default Account
