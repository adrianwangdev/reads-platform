import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './stores'

/* Components */
import Header from './components/Header/Header'
import Home from './views/Home'
import Detail from './views/Detail'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Route path='/' component={Home} exact />
      <Route path='/detail' component={Detail} />
    </BrowserRouter>
  </Provider>
)

export default App
