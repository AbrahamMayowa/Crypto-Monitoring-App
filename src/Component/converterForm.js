import React, {Component} from 'react';
import {cryptoToCurrencyThunk, currencyToCryptoThunk} from '../redux/action/ConvertApiThunkAction';
import {connect} from 'react-redux';
import {redirectToNational} from '../redux/action/redirectDestination'
import { Redirect, useHistory} from 'react-router-dom';
import {withRouter} from 'react-router'
import '../CssFile/convertForm.css'


    

class ConvertForm extends Component{
      constructor(props){
          super(props);
          this.state={
              // there will be single display of error at a time on the error display div
              cryptoToCurrencyState:{
                quantityAmount: {
                    figureAmount: null,
                    amountErrorMessage: '',
                    validInput: true,
                    validForSubmit: false
                },

                cryptoCode: { 
                    tokenCode: 'btc',
                },
                currencyCode: {
                    nationalCode: 'usd',
                    
                }
              },

              nationalCurrencyToCrypto:{
                quantityAmount: {
                    figureAmount: null,
                    amountErrorMessage: '',
                    validInput: true,
                    validForSubmit: false
                },

                cryptoCode: {
                    tokenCode: 'btc',
                },
                currencyCode: {
                    nationalCode: 'usd'
                    
                }
                }

          };

    

        }

    // for reusing the targetProperty logic
    targetPropertyUtility = (target) => {
        let objectTarget;
        if (target.name === 'quantityAmount'){
            return objectTarget = 'figureAmount';
        }else if (target.name === 'cryptoCode'){
            return objectTarget = 'tokenCode';
        }else{
            return objectTarget = 'nationalCode';
        }

    };
    

      handleCryptoChange = (e) => { 
          const regexp = new RegExp(`^-?[0-9]*$`);
          const target = e.target;
          e.persist();
          // check above arror function to understand targetPropertyUtility
          let targetProperty = this.targetPropertyUtility(target)
          if (target.name === 'quantityAmount' && !regexp.test(target.value)){
            this.setState({
                ...this.state,
                cryptoToCurrencyState:{
                    ...this.state.cryptoToCurrencyState,
                    [target.name]: {
                        ...this.state.cryptoToCurrencyState[target.name],
                        [targetProperty] : target.value,
                        amountErrorMessage: 'Input only valid number',
                        validInput: false,
                        validForSubmit: false
                        } 
                }
                });
        }else if(target.name === 'quantityAmount' && regexp.test(target.value)){
            this.setState({
                ...this.state,
                cryptoToCurrencyState:{
                    ...this.state.cryptoToCurrencyState,
                    [target.name]: {
                        ...this.state.cryptoToCurrencyState[target.name],
                        [targetProperty] : target.value,
                        amountErrorMessage: null,
                        validInput: true,
                        validForSubmit: true

                        } 
                }
                });
        }else{
            this.setState({
                ...this.state,
                cryptoToCurrencyState:{
                    ...this.state.cryptoToCurrencyState,
                    [target.name]: {
                        ...this.state.cryptoToCurrencyState[target.name],
                        [targetProperty] : target.value,
                    }
                },
  
            });

        }

    };

     handleNationalCurrencyChange = (e) => {
        const regexp = new RegExp(`^-?[0-9]*$`);
        const target = e.target;
        e.persist();
        // check above arror function to understand targetPropertyUtility
        let targetProperty = this.targetPropertyUtility(target)
        if (target.name === 'quantityAmount' && !regexp.test(target.value)){
          this.setState({
              ...this.state,
              nationalCurrencyToCrypto:{
                  ...this.state.nationalCurrencyToCrypto,
                  [target.name]: {
                      ...this.state.nationalCurrencyToCrypto[target.name],
                      [targetProperty] : target.value,
                      amountErrorMessage: 'Input only valid number',
                      validInput: false,
                      validForSubmit: false
                      }
              }
              });
            }else if(target.name === 'quantityAmount' && regexp.test(target.value)){
          this.setState({
              ...this.state,
              nationalCurrencyToCrypto:{
                  ...this.state.nationalCurrencyToCrypto,
                  [target.name]: {
                      ...this.state.nationalCurrencyToCrypto[target.name],
                      [targetProperty] : target.value,
                      amountErrorMessage: null,
                      validInput: true,
                      validForSubmit: true
                      } 
              }
              });
      }else{
          this.setState({
              ...this.state,
              nationalCurrencyToCrypto:{
                  ...this.state.nationalCurrencyToCrypto,
                  [target.name]: {
                      ...this.state.nationalCurrencyToCrypto[target.name],
                      [targetProperty] : target.value,

                  }
              },

          });
        }
     };

     


// this event handle the submit of cryptocurrency to national currency
     handleCryptoSubmit = (e) => {
         e.preventDefault()
         const {cryptoToCurrencyState} = this.state;
         const {quantityAmount, cryptoCode, currencyCode}= cryptoToCurrencyState;
         /// The validInput of each field will be use to validate the form
         /// then lauch action thunk if the form is valid
         /// if form is not valid, validation error will be displayed and the action thunk will be prevented
         /// There will be main error display to show the form is not valid

        if(quantityAmount.validForSubmit){
            this.props.dispatch(cryptoToCurrencyThunk(quantityAmount.figureAmount, cryptoCode.tokenCode, currencyCode.nationalCode))
            this.props.history.push('/result')


        }else if(!quantityAmount.figureAmount){
            this.setState({
                ...this.state,
                cryptoToCurrencyState:{
                    ...this.state.cryptoToCurrencyState,
                    quantityAmount: {
                        ...this.state.cryptoToCurrencyState.quantityAmount,
                        amountErrorMessage: 'The field is required',
                        validInput: false,
                        validForSubmit: false
                        },

                }
                });
            }
            // and calling thunk action, there will be redirection to result page
        }
    



     handleNationalSubmit = (e) =>{
        e.preventDefault();
        const {nationalCurrencyToCrypto} = this.state;
        const {quantityAmount, cryptoCode, currencyCode} = nationalCurrencyToCrypto;


        if(quantityAmount.validForSubmit){
            this.props.dispatch(currencyToCryptoThunk(quantityAmount.figureAmount, currencyCode.nationalCode, cryptoCode.tokenCode));
            // to ensure redirection to appropriate component
            // check the its action module to understand it better
            this.props.dispatch(redirectToNational());
            this.props.history.push('/result')

        }else if(!quantityAmount.figureAmount){
            this.setState({
                ...this.state,
                nationalCurrencyToCrypto:{
                    ...this.state.nationalCurrencyToCrypto,
                    quantityAmount: {
                        ...this.state.nationalCurrencyToCrypto.quantityAmount,
                        amountErrorMessage: 'The field is required',
                        validInput: false,
                        },

                }
                });
            }
        }

    render(){
        // the variable save the long line that reference state to handle redirect to result component
        const handleCountryRedirect = this.state.nationalCurrencyToCrypto.quantityAmount.validForSubmit
        return (
            // convert digital currency form
            <div className='convert-form-wrapper'>
                <div className='main-wrapper'>
                <div className='form-wrapper'>
                    <header className='form-header'>Cryptocurrency Conversion</header>
                
                        <form className='form-class' onSubmit={this.handleCryptoSubmit}>
                            <label className="label">National Currency quantity</label>
                            <input className='field-input' type="text" name="quantityAmount" placeholder='The amount of token in figure' 
                            onChange={this.handleCryptoChange}/>

                            {(!this.state.cryptoToCurrencyState.quantityAmount.validInput) && 
                            (<label className='error-message'>{this.state.cryptoToCurrencyState.quantityAmount.amountErrorMessage}</label>)}

                                    <label className='label'>Choose a digital currency</label>

                                    <select className='field-select' name="cryptoCode" placeholder='choose a digital currency' 
                                    onChange={this.handleCryptoChange}>
                                        
                                        <option value='btc'>Bitcoin</option>
                                        <option value='ltc'>Litecoin</option>
                                        <option value='eth'>Ethereum</option>
                                        <option value='zec'>Zcash</option>
                                        <option value='dash'>Dash</option>
                                        <option value='xrp'>Ripple</option>
                                        <option value='xmr'>Monero</option>
                                        <option value='bch'>Bitcoin Cash</option>
                                        <option value='neo'>Neo</option>
                                        <option value='ada'>Cardano</option>
                                        <option value='eos'>EOS</option>
                                        <option value='usdt'>Tether</option>
                                        <option value='bnb'>Binance Coin</option>
                                        <option value='bchsv'>Bitcoin SV</option>
                                    </select>

                                    <label className='label'>Choose a country currency code</label>

                                    <select className='field-select' name='currencyCode' placeholder='choose a country currency' onChange={this.handleCryptoChange}>
                                        <option value='usd'>US Dollar</option>
                                        <option value='eur'>European Euro</option>
                                        <option value='jpy'>Japanese Yen</option>
                                        <option value='gbp'>British Pound</option>
                                        <option value='aud'>Australian Dollar</option>
                                        <option value='cad'>Canadian Dollar</option>
                                        <option value='chf'>Swiss Franc</option>
                                        <option value='cny'>Chinese Yuan Renminbi</option>
                                        <option value='sek'>Swedish Krona</option>
                                        <option value='mxn'>Mexican Peso</option>
                                        <option value='nzd'>New Zealand Dollar</option>
                                        <option value='sgd'>Singapore Dollar</option>
                                        <option value='hkd'>Hong Kong Dollar</option>
                                        <option value='nok'>Norwegian krone</option>
                                        <option value='krw'>South Korean Won</option>
                                        <option value='try'>Turkish lira</option>
                                        <option value='inr'>Indian Rupee</option>
                                        <option value='rub'>Russian Ruble</option>
                                        <option value='brl'>Brazilian Real</option>
                                        <option value='zar'>African Rand</option>
                                        <option value='ngn'>Nigeria Naira</option>
                                    </select>

                                <button className='button' type="submit">submit</button>
                    </form>
                </div>


            <div className='form-wrapper'>
                <header className='form-header'>National Currency Conversion</header>

                <form className='form-class' onSubmit={this.handleNationalSubmit}>

                    <label className='label'>National currency quantity</label>

                    <input className='field-input' type="text" name="quantityAmount" placeholder='The quantity of the prefered national currency' 
                    onChange={this.handleNationalCurrencyChange}/>

                     {!this.state.nationalCurrencyToCrypto.quantityAmount.validInput && 
                     <div className='error-message'>{this.state.nationalCurrencyToCrypto.quantityAmount.amountErrorMessage}</div>}

                            <label className='label'>Choose a digital currency</label>

                            <select className='field-select' name="cryptoCode" placeholder='choose a digital currency' onChange={this.handleNationalCurrencyChange}>

                                <option value='btc'>Bitcoin</option>
                                <option value='ltc'>Litecoin</option>
                                <option value='eth'>Ethereum</option>
                                <option value='zec'>Zcash</option>
                                <option value='dash'>Dash</option>
                                <option value='xrp'>Ripple</option>
                                <option value='xmr'>Monero</option>
                                <option value='bch'>Bitcoin Cash</option>
                                <option value='neo'>Neo</option>
                                <option value='ada'>Cardano</option>
                                <option value='eos'>EOS</option>
                                <option value='usdt'>Tether</option>
                                <option value='bnb'>Binance Coin</option>
                                <option value='bchsv'>Bitcoin SV</option>
                            </select>

                
                            <label className='label'>Choose a Country currency code</label>
                            <select className='field-select' name='currencyCode' placeholder='choose a country currency' onChange={this.handleNationalCurrencyChange}>
                                <option value='usd'>US Dollar</option>
                                <option value='eur'>European Euro</option>
                                <option value='jpy'>Japanese Yen</option>
                                <option value='gbp'>British Pound</option>
                                <option value='aud'>Australian Dollar</option>
                                <option value='cad'>Canadian Dollar</option>
                                <option value='chf'>Swiss Franc</option>
                                <option value='cny'>Chinese Yuan Renminbi</option>
                                <option value='sek'>Swedish Krona</option>
                                <option value='mxn'>Mexican Peso</option>
                                <option value='nzd'>New Zealand Dollar</option>
                                <option value='sgd'>Singapore Dollar</option>
                                <option value='hkd'>Hong Kong Dollar</option>
                                <option value='nok'>Norwegian krone</option>
                                <option value='krw'>South Korean Won</option>
                                <option value='try'>Turkish lira</option>
                                <option value='inr'>Indian Rupee</option>
                                <option value='rub'>Russian Ruble</option>
                                <option value='brl'>Brazilian Real</option>
                                <option value='zar'>African Rand</option>
                                <option value='ngn'>Nigeria Naira</option>
                            </select>

                        <button className='button' type="submit" onClick={()=> handleCountryRedirect && <Redirect to={'/result'} />}>submit</button>
            </form>
            </div>
            </div>

            </div>      

        )


    }

}
/*
const mapStatetoProps = (state) => ({
    resultToken : state.currencyConverterReducer.resultTokenToCountryCurrency,
    resultNational : state.currencyConverterReducer.resultCountryCurrencyToCrypto,
    error : state.currencyConverterReducer.error,
    loading: state.currencyConverterReducer.loading
})

*/


export default withRouter(connect()(ConvertForm));