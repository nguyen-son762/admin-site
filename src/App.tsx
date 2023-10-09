import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './redux/store'
import RoutesWrapper from './routes/RoutesWrapper'

function App() {
  return (
    <Provider store={store} key='provider'>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <RoutesWrapper />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
