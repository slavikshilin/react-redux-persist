import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
