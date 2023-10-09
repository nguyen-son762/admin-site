import { memo } from 'react'

import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined'
import { Box, IconButton } from '@mui/material'

const Header = () => {
  return (
    <Box paddingY={2} paddingX={3} display='flex'>
      <Box width={260} display='flex' justifyContent='end'>
        <IconButton aria-label='delete'>
          <DehazeOutlinedIcon fontSize='inherit' color='primary' />
        </IconButton>
      </Box>
    </Box>
  )
}

export default memo(Header)
