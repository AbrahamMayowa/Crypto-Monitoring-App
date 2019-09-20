import React, {Component} from 'react';
import {cryptoToCurrencyThunk, currencyToCryptoThunk} from './redux/action/ConvertApiThunkAction';
import {updateQuantity, updateTokenCode, updateCountryCode} from './redux/action/updateConvertProperty';
import {connect} from 'react-redux';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {store} from '../src/redux/storeConfiguration';
import { tsDeclareFunction } from '@babel/types';
    

class ConvertForm extends Component{
      constructor(props){
          super(props);
          this.state={
              // there will be single display of error at a time on the error display div
              cryptoToCurrencyState:{
                quantityAmount: {
                    figureAmount: null,
                    amountErrorMessage: '',
                    validInput: true
                },

                cryptoCode: { 
                    tokenCode: '',
                    tokenErrorMessage: "It's a required field",
                    validInput: true, 
                },
                currencyCode: {
                    nationalCode: '',
                    nationalCodeErrorMessage: "It's a required field",
                    validInput: true
                    
                }
              },

              nationalCurrencyToCrypto:{
                quantityAmount: {
                    figureAmount: null,
                    amountErrorMessage: '',
                    validInput: true
                },

                cryptoCode: {
                    tokenCode: '',
                    tokenErrorMessage: "It's a required field",
                    validInput: true, 
                },
                currencyCode: {
                    nationalCode: '',
                    nationalCodeErrorMessage: "It's a required field",
                    validInput: true
                    
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
        }
        return objectTarget = 'nationalCode';

    };

    // to target error error message property aside quantityAmount object
    otherErrorMessage = (target) => {
        let errorMess;
        if (target.name === 'cryptoCode'){
            return errorMess = 'tokenErrorMessage';
        }else if(target.name === 'currencyCode'){
            return errorMess = 'nationalCodeErrorMessage';
    };
    }
    

      handleCryptoChange = (e) => { 
          const regexp = new RegExp(`^-?[0-9]*$`);
          const target = e.target;
          const name = target.name;
          let otherError = this.otherErrorMessage(target);
          e.persist();
          // check above arror function to understand targetPropertyUtility
          let targetProperty = this.targetPropertyUtility(target)
          if (target.name === 'quantityAmount' && !regexp.test(target.value)){
            this.setState({
                ...this.state,
                cryptoToCurrencyState:{
                    ...this.state.cryptoToCurrencyState,
                    validForm: false,
                    [target.name]: {
                        ...this.state.cryptoToCurrencyState[target.name],
                        [targetProperty] : target.value,
                        amountErrorMessage: 'input only valid number',
                        validInput: false
                        } 
                }
                });
        }else if(target.name === 'quantityAmount' && regexp.test(target.value)){
            this.setState({
                ...this.state,
                cryptoToCurrencyState:{
                    ...this.state.cryptoToCurrencyState,
                    validForm: true,
                    [target.name]: {
                        ...this.state.cryptoToCurrencyState[target.name],
                        [targetProperty] : target.value,
                        amountErrorMessage: null,
                        validInput: true

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
                        [otherError]: null,
                        validInput: true
                    }
                },
  
            });

        }

    };

     handleNationalCurrencyChange = (e) => {

        const regexp = new RegExp(`^-?[0-9]*$`);
        const target = e.target;
        let otherError = this.otherErrorMessage(target);
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
                      amountErrorMessage: 'input only valid number',
                      validInput: false
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
                      validInput: true
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
                      [otherError]: null,
                      validInput: true

                  }
              },

          });
        }
     };

     


// this event handle the submit of cryptocurrency to national currency
     handleCrypoSubmit = (e) => {
         e.preventDefault();
         const {cryptoToCurrencyState} = this.state;
         const {quantityAmount, cryptoCode, currencyCode} = cryptoToCurrencyState;
         if (!quantityAmount.figureAmount){
            this.setState({
                ...this.state,
                cryptoToCurrencyState:{
                    ...this.state.cryptoToCurrencyState,
                    quantityAmount: {
                        ...this.state.cryptoToCurrencyState.quantityAmount,
                        amountErrorMessage: 'The field is required',
                        validInput: false
                        },

                }
                });
         }


         if(!cryptoCode.tokenCode){
            this.setState({
                ...this.state,
                cryptoToCurrencyState:{
                    ...this.state.cryptoToCurrencyState,
                    cryptoCode: {
                        ...this.state.cryptoToCurrencyState.cryptoCode,
                        validInput: false
                        },
                }
                });
         }


         if(!currencyCode.nationalCode){
            this.setState({
                ...this.state,
                cryptoToCurrencyState:{
                    ...this.state.cryptoToCurrencyState,
                    currencyCode: {
                        ...this.state.cryptoToCurrencyState.currencyCode,
                        validInput: false
                        },
                }
                });
         }
         
         /// The validInput of each field will be use to validate the form
         /// then lauch action thunk if the form is valid
         /// if form is not valid, validation error will be displayed and the action thunk will be prevented
         /// There will be main error display to show the form is not valid

     }


     handleNationalSubmit = (e) =>{
        e.preventDefault();
        const {nationalCurrencyToCrypto} = this.state;
        const {quantityAmount, cryptoCode, currencyCode} = nationalCurrencyToCrypto;
        if (!quantityAmount.figureAmount){
            this.setState({
                ...this.state,
                nationalCurrencyToCrypto:{
                    ...this.state.nationalCurrencyToCrypto,
                    quantityAmount: {
                        ...this.state.nationalCurrencyToCrypto.quantityAmount,
                        amountErrorMessage: 'The field is required',
                        validInput: false
                        },

                }
                });
         }


         if(!cryptoCode.tokenCode){
            this.setState({
                ...this.state,
                nationalCurrencyToCrypto:{
                    ...this.state.nationalCurrencyToCrypto,
                    cryptoCode: {
                        ...this.state.nationalCurrencyToCrypto.cryptoCode,
                        validInput: false
                        },
                }
                });
         }


         if(!currencyCode.nationalCode){
            this.setState({
                ...this.state,
                nationalCurrencyToCrypto:{
                    ...this.state.nationalCurrencyToCrypto,
                    currencyCode: {
                        ...this.state.nationalCurrencyToCrypto.currencyCode,
                        validInput: false
                        },
                }
                });
         }
     }
       

    render(){

        return (
            // convert national currency to digital currency formik form
                <div>
                <div>
                    convert from National currency to digital currency
                </div>

                <form onSubmit={this.handleCrypoSubmit}>

                    <label>
                        Token Amount
                    </label>

                    <input type="text" name="quantityAmount" placeholder='The quantity of the token' onChange={this.handleCryptoChange}/>

                            <label htmlFor='cryptoCode'>
                                Digital currency
                            </label>
                            <select name="cryptoCode" placeholder='choose a digital currency' onChange={this.handleCryptoChange}>
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
                        <div>
                            <label htmlFor="currencyCode">Country Currency Code</label>
                            <select name='currencyCode' placeholder='choose a country currency' onChange={this.handleCryptoChange}>
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
                        </div>
                        <div>
                        <button type="submit">submit</button>
                        </div>
            </form>
            <div>
            <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>


            <div>
                <h2>
                    Convert Crypo Token to National Currency
                </h2>


                <form onSubmit={this.handleNationalSubmit}>

                    <label>
                        National Currency Amount
                    </label>

                    <input type="text" name="quantityAmount" placeholder='The quantity of the prefered national currency' 
                    onChange={this.handleNationalCurrencyChange}/>

                            <label htmlFor='cryptoCode'>
                                Digital currency
                            </label>
                            <select name="cryptoCode" placeholder='choose a digital currency' onChange={this.handleNationalCurrencyChange}>
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
                        <div>
                            <label htmlFor="currencyCode">Country Currency Code</label>
                            <select name='currencyCode' placeholder='choose a country currency' onChange={this.handleNationalCurrencyChange}>
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
                        </div>
                        <div>
                        <button type="submit">submit</button>
                        </div>
            </form>
            </div>


            </div>

            
               

        );


    }

}


export default ConvertForm;