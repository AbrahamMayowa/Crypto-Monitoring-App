import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import '../CssFile/token-convert-result.css'

const FetchCryptoResult = ({tokenResult, handleClick}) => {
    const {path, url} = useRouteMatch()

    
    if(tokenResult){
    return(


<div className='token-result'>


<div className='token-from'>{tokenResult.from_quantity} <span onClick={handleClick(tokenResult.from_symbol)}>
    <Link to={`/result/${tokenResult.to_name}`}> {tokenResult.from_name} </Link></span> ({tokenResult.from_symbol}) </div>


<div className='token-to'> =  {tokenResult.to_quantity}  {tokenResult.to_name}  ({tokenResult.to_symbol})</div>
  

</div>
    )
    }else{
        return(
            <div className='token-error'>
                No token selected! Return to <Link to={'/'}>Home</Link>
            </div>
        )
    }

}

export default FetchCryptoResult