import { memo } from 'react'

import { Drawer } from '@mui/material'

import { useAppSelector } from '@/redux/store'

const Sidebar = () => {
  const { showSidebar } = useAppSelector((state) => state.common)
  return (
    <Drawer
      sx={{
        '& .MuiDrawer-paper': {
          width: 260,
          boxSizing: 'border-box'
        }
      }}
      variant='persistent'
      anchor='left'
      open={showSidebar}
    >
      erh
    </Drawer>
  )
}

export default memo(Sidebar)
