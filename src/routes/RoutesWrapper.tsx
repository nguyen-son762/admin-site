import { Routes, Route } from 'react-router-dom'

import DefaultLayout from '@/layouts/DefaultLayout'
import DashboardScreen from '@/screens/DashboardScreen/DashboardScreen'
import LoginScreen from '@/screens/LoginScreen/LoginScreen'

const RoutesWrapper = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <DefaultLayout>
            <DashboardScreen />
          </DefaultLayout>
        }
      />
      <Route
        path='/login'
        element={
          <DefaultLayout>
            <LoginScreen />
          </DefaultLayout>
        }
      />
    </Routes>
  )
}

export default RoutesWrapper
