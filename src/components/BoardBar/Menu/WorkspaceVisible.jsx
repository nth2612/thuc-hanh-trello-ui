import CorporateFareIcon from '@mui/icons-material/CorporateFare'
import DoneIcon from '@mui/icons-material/Done'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import PublicIcon from '@mui/icons-material/Public'
import { Button, List, ListItemButton, ListItemText, ListSubheader, Menu, Tooltip, Typography } from '@mui/material'
import { cloneElement, useState } from 'react'

const listVisibility = [
  {
    id: 1,
    icon: <LockOutlinedIcon fontSize='16px' sx={{ color: '#C9372C', mr: 0.5 }}/>,
    priText: 'Private',
    seText: 'Only board members can see this board. Workspace admins can close the board or remove members.',
    disabled : false,
    checked : true
  },
  {
    id: 2,
    icon: <PeopleAltOutlinedIcon fontSize='16px' sx={{ color: '#44546f', mr: 0.5 }}/>,
    priText: 'Workspace',
    seText: 'All members of the Test Workspace can see and edit this board.',
    disabled : false,
    checked : false
  },
  {
    id: 3,
    icon: <CorporateFareIcon fontSize='16px' sx={{ color: '#44546f', mr: 0.5 }}/>,
    priText: 'Organization',
    seText: 'All members of the organization can see this board. The board must be added to an enterprise Workspace to enable this.',
    disabled : true,
    checked : false
  },
  {
    id: 4,
    icon: <PublicIcon fontSize='16px' sx={{ color: '#22a06b', mr: 0.5 }} />,
    priText: 'Public',
    seText: 'Anyone on the internet can see this board. Only board members can edit.',
    disabled : false,
    checked : false
  }
]

function WorkspaceVisible({ hideText }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const [choosedVisibility, setChoosedVisibility] = useState(listVisibility.find(vi => vi.checked === true))
  const handleChooseVisibility = (visibility) => {
    if (visibility !== choosedVisibility) {
      const newCheckedVisibility = visibility
      newCheckedVisibility.checked = true
      choosedVisibility.checked = false
      setChoosedVisibility(newCheckedVisibility)
    }
    handleClose()
  }
  const textChoosed = choosedVisibility.priText
  const IconChoosed = () => cloneElement(choosedVisibility.icon, {
    sx: { ...choosedVisibility.icon.props.sx, color: 'white' }
  })
  return (
    <>
      <Tooltip title='Change visibility'>
        <Button
          id='btn-change-visibility'
          aria-controls={open ? 'menu-change-visibility' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            minWidth: 'unset',
            paddingRight: !hideText ? undefined : 1.5,
            paddingLeft: !hideText ? undefined : 2,
            paddingY: !hideText ? '8.25px' : undefined,
            '& *' : { margin: !hideText ? '0 !important' : undefined } }}
          startIcon={<IconChoosed />}>
          {hideText && <span>{textChoosed} visible</span>}
        </Button>
      </Tooltip>
      <Menu
        id='menu-change-visibility'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              width: '384px'
            }
          }
        }}
        MenuListProps={{
          'aria-labelledby': 'btn-change-visibility'
        }}
      >
        <List sx={{ paddingY: 0 }}>
          <ListSubheader sx={{ textAlign: 'center', fontSize: '0.875rem' }}>Change visibility</ListSubheader>
          {listVisibility.map(vi => (
            <ListItemButton disabled={vi.disabled} key={vi.id} sx={{ padding: '6px 12px' }} onClick={() => handleChooseVisibility(vi) } >
              <ListItemText
                sx={{ marginY: 0 }}
                primary={
                  <Typography sx={{ display: 'flex', alignItems: 'center', paddingBottom: 0.5, pl: 0.5 }}>
                    {vi.icon}
                    <Typography variant='span'>{vi.priText}{vi.checked && <span><DoneIcon sx={{ fontSize: '1.125rem', paddingTop: '4px' }} /></span>}</Typography>
                  </Typography>
                }
                secondary={
                  <Typography sx={{ fontSize: '0.75rem' }}>{vi.seText}</Typography>
                }
              />
            </ListItemButton>
          ))}
        </List>
      </Menu>
    </>
  )
}

export default WorkspaceVisible
