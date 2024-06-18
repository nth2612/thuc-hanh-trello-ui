import TextField from '@mui/material/TextField'
import { InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { Tooltip } from '@mui/material'
import { useState } from 'react'


function Search() {
  const [searchText, setSearchText] = useState('')
  return (
    <Tooltip title='Search: /'>
      <TextField
        sx={{
          '&:hover' : { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
          '& input' : { paddingY: '4.5px' },
          '& fieldset, & .MuiInputBase-root:hover fieldset, & > .MuiOutlinedInput-root.Mui-focused > fieldset' : { borderColor: '#fff' },
          '& label, & input, & .MuiInputAdornment-root .MuiSvgIcon-root' : { color: 'white' }
        }}
        value={searchText}
        id="input-with-sx"
        label="Search"
        variant="outlined"
        size='small'
        onChange={(e) => setSearchText(e.target.value)}
        InputProps={{
          startAdornment:(
            <InputAdornment position='start' >
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment:(
            <CloseIcon
              sx={{ color: searchText ? 'white' : 'transparent', cursor: searchText ? 'pointer' : 'default' }}
              onClick={() => setSearchText('')} />
          )
        }}
      />
    </Tooltip>
  )
}

export default Search
