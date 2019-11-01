import React from 'react';
import ConvertWrapper from './ConvertWrapper'
import MainConvert from './convertResultMain'
import Home from './Home'
import Error404 from './error404'
import Header from './Header'

import { Route, Switch } from 'react-router-dom';



function Main() {
  return (

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

  )
}

export default Main
