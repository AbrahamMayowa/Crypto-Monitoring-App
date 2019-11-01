import React from 'react'
import {connect} from 'react-redux'
import Error from './error'
import {Loading} from './loading'
import {withRouter} from 'react-router'
import FetchCryptoResult from './cryptoResultComponent'
import FetchCountryResult from './countryResultComponent'
import getTokenDetailsThunk from '../redux/action/cryptoDetailsThunk'

class ConvertResult extends React.Component{
    

    handleClick = (tokenCode) => {
        this.props.dispatch(getTokenDetailsThunk(tokenCode))
    }

    render(){
        const {redirectDestination, error, loading, tokenResult, nationalCurrencyResult} = this.props;

    if(loading){
        return(
            <div>
                <Loading />
            </div>
        )
    }else if(redirectDestination && !loading){
        return(
            <div className='result-wrapper'>
            
                <FetchCountryResult nationalData={nationalCurrencyResult} handleClick={this.handleClick}/>
            </div>
        )
    }else if(!redirectDestination && !loading && !error){
        return(
            <div className='result-wrapper'>
            
                    <FetchCryptoResult tokenResult={tokenResult} handleClick={this.handleClick}/>
                
            </div>
        )
    }else if(error){
        return(
            <div>
                <Error error={error} />
            </div>
        )
    }
}
}



const mapStateToProps = (state) => ({
    redirectDestination: state.redirectNational.redirectToNationalComponent,
    error: state.currencyConverterReducer.error,
    loading: state.currencyConverterReducer.loading,
    tokenResult: state.currencyConverterReducer.resultTokenToCountryCurrency,
    nationalCurrencyResult: state.currencyConverterReducer.resultCountryCurrencyToCrypto

})

export default withRouter(connect(mapStateToProps)(ConvertResult))