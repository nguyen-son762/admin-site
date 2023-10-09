import { FC, ReactNode, memo } from 'react'

import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'

type DefaultLayoutProps = {
  children: ReactNode
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      <Sidebar />
      {children}
    </main>
  )
}

export default memo(DefaultLayout)
