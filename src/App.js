import React from 'react';
import {Provider} from 'react-redux'
import {store} from './redux/storeConfiguration'
import MainConvert from './Component/convertResultMain'
import Home from './Component/Home'
import Error404 from './Component/error404'
import Header from './Component/Header'

import { Route, Switch } from 'react-router-dom';



function Main() {
  return (
  <Provider store={store} >
    <div>
    <div>
      <Header />
    </div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/result' component={MainConvert} />
      <Route component={Error404} />
    </Switch>

    </div>
    </Provider>

  )
}

export default Main
