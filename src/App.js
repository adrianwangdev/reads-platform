import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './stores'

/* Components */
import Header from './components/Header/Header'
import Home from './views/Home'
import Login from './views/Login'
import Detail from './views/Detail'
import Write from './views/Write'

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/detail/:id' component={Detail} exact />
        <Route path='/write' component={Write} exact />
      </BrowserRouter>
    </Provider>
  )
}
export default App
