import React from 'react'
import ConvertForm from './converterForm'
import {Provider} from 'react-redux'
import ConvertResult from './convertResult'
import {store} from '../redux/storeConfiguration'
import Footer from './footer'
import '../CssFile/convert-wrapper.css'

const ConvertWrapper = ()=>{
     // get the match object from the react-router
     return(
         <div className='convert-wrapper'>
             <Provider store={store}>
                     <div className='result'>
                         <ConvertResult />
                     </div>
                     <div className='form'>
                         <ConvertForm />
                     </div>
                     <div className='footer'>
                        <Footer />
                     </div>
    
             </Provider>
             </div>
     )
}

export default ConvertWrapper
