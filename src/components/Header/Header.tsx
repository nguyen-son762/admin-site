import { memo } from 'react'

import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined'
import { Box, IconButton } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { setShowSidebar } from '@/redux/common.slice'
import SettingsIcon from '@mui/icons-material/Settings'

const Header = () => {
  const { showSidebar } = useAppSelector((state) => state.common)
  const dispatch = useAppDispatch()
  const toogleSidebar = () => {
    dispatch(setShowSidebar(!showSidebar))
  }
  return (
    <Box px={3} paddingLeft={65} py={3} display='flex' justifyContent='space-between'>
      <Box display='flex' justifyContent='end'>
        <IconButton aria-label='delete' onClick={toogleSidebar}>
          <DehazeOutlinedIcon fontSize='inherit' color='primary' />
        </IconButton>
      </Box>
      <Box>
        <IconButton aria-label='delete'>
          <SettingsIcon fontSize='inherit' />
        </IconButton>
      </Box>
    </Box>
  )
}

export default memo(Header)
