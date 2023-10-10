import { FC, ReactNode, memo } from 'react'

import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'
import { useAppSelector } from '@/redux/store'
import { useStyles } from './DefaultLayout.style'
import clsx from 'clsx'

type DefaultLayoutProps = {
  children: ReactNode
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  const classes = useStyles()
  const { showSidebar } = useAppSelector((state) => state.common)
  return (
    <main>
      <Header />
      <Sidebar />
      <div className={clsx(classes.main, showSidebar && classes.active)}>{children}</div>
    </main>
  )
}

export default memo(DefaultLayout)
