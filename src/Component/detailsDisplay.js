import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import '../CssFile/single-details.css'


const DetailsDisplay = ({data}) =>{
    if(data){
    return (
        <div className='details-wrapper'>

            <div className='price'>
                <header>Price in USD</header> 
                <p>{data.last_price}</p>
            </div>

                <div className='change-volume'>
                    <p className='change'> 24hrs change in % {data.price_24hr_pcnt}</p>
                    <p className='volume'>Volume: {data.volume_24hr}</p>
                </div >
        
                <div className='token-name'>{data.coin_name}</div>
            </div>
    )
    
    }else{
        return(
        <div> 
            Opss! No Bitcoin Selected! Return <Link to={'/'}></Link>
        </div>
        )
    }
}

export default DetailsDisplay