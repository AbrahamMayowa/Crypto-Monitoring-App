import React from 'react'
import {Link} from 'react-router-dom'
import '../CssFile/country-convert-result.css'



const FetchCountryResult = ({nationalData, handleClick}) => {
    if(nationalData){
    return(
        <div>
            <div className='country-result'>


            <div className='country-from'>{nationalData.from_quantity} {nationalData.from_name} ({nationalData.from_symbol})</div>


            <div className='country-to'> = {nationalData.to_quantity}<span onClick={handleClick(nationalData.to_symbol)}> 

<Link to={`/result/${nationalData.to_name}`}> {nationalData.to_name} </Link>

</span>({nationalData.to_symbol})</div>
            
            </div>

            </div>
    )
    }else{
        return(
            <div className='empty-country'>
                <p>
                    oops! Error! <Link to={'/'}>Home</Link>
                </p>

            </div>
        )
    }
    
}

export default FetchCountryResult