import React from 'react';
import ConvertForm from './converterForm';
import {Provider} from 'react-redux';
import {store} from '../redux/storeConfiguration';
import TopTokens from './topTokenComponent'
import '../CssFile/home.css'
import FormPropsRender from './convertFormProps'
import { Route, Switch } from 'react-router-dom';
import Footer from './footer'

const Home = ()=>{
return (

    <div className='home-wrapper'>
      

      <Provider store={store}>

        <article className='info'>
          <div className='header-text'>
        
            <p>Monitor the prices and trends<br/> of top cryptocurrencies</p>
  
          </div>
        </article>
        <div className='convert-class'>
          <ConvertForm />
        </div>
      <div className='tokens-table'>
        <TopTokens />
      </div>
      <div className='footer'>
        <Footer />
      </div>

      
      </Provider>
     
    </div>
  )
}

export default Home