import React from 'react'
import { Provider } from 'react-redux'
import store from './stores'

/* Components */
import Header from './components/Header/Header'

const App = () => (
  <Provider store={store}>
    <Header />
  </Provider>
)

export default App
