import React from 'react'
import ConvertForm from './converterForm'
import ConvertResult from './convertResult'
import Footer from './footer'
import '../CssFile/convert-wrapper.css'

const ConvertWrapper = ()=>{
     // get the match object from the react-router
     return(
         <div className='convert-wrapper'>
                     <div className='result'>
                         <ConvertResult />
                     </div>
                     <div className='form'>
                         <ConvertForm />
                     </div>
                     <div >
                        <Footer />
                     </div>
             </div>
     )
}

export default ConvertWrapper
