import React, {Component} from 'react';
import {cryptoToCurrencyThunk, currencyToCryptoThunk} from './redux/action/ConvertApiThunkAction';
import {connect} from 'react-redux';

    

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
        }
        return objectTarget = 'nationalCode';

    };

    // to target error error message property aside quantityAmount object
    //otherErrorMessage = (target) => {
        //let errorMess;
        //if (target.name === 'cryptoCode'){
           // return errorMess = 'tokenErrorMessage';
        //}else if(target.name === 'currencyCode'){
          //  return errorMess = 'nationalCodeErrorMessage';
    //};
    //}
    

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
                        amountErrorMessage: 'input only valid number',
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
                      amountErrorMessage: 'input only valid number',
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
         e.preventDefault();
         const {cryptoToCurrencyState} = this.state;
         const {quantityAmount, cryptoCode, currencyCode}= cryptoToCurrencyState;
         /// The validInput of each field will be use to validate the form
         /// then lauch action thunk if the form is valid
         /// if form is not valid, validation error will be displayed and the action thunk will be prevented
         /// There will be main error display to show the form is not valid

        if(quantityAmount.validForSubmit){
            this.props.dispatch(cryptoToCurrencyThunk(quantityAmount.figureAmount, cryptoCode.tokenCode, currencyCode.nationalCode));

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
        const {resultToken, resultNational, error, loading} = this.props;

        return (
            // convert digital currency form
                <div>
                <div>
                </div>

                <form onSubmit={this.handleCryptoSubmit}>

                    <label>
                        Token Amount
                    </label>

                    <input type="text" name="quantityAmount" placeholder='The quantity of the token' onChange={this.handleCryptoChange}/>
                    {!this.state.cryptoToCurrencyState.quantityAmount.validInput && <h3>{this.state.cryptoToCurrencyState.quantityAmount.amountErrorMessage}</h3>}
                    <div>

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
                            {!this.state.cryptoToCurrencyState.cryptoCode.validInput && <h3>{this.state.cryptoToCurrencyState.cryptoCode.tokenErrorMessage}</h3>}
                    </div>
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
                            {!this.state.cryptoToCurrencyState.currencyCode.validInput && <h3>{this.state.cryptoToCurrencyState.currencyCode.nationalCodeErrorMessage}</h3>}
                        </div>
                        <div>
                        <button type="submit">submit</button>
                        </div>
            </form>
            
            <div>
                <div>
                    {loading ? <h4>loading...</h4> : 
                    resultNational ? <p>{JSON.stringify(resultNational)}</p> : <p>{JSON.stringify(error)}</p>}
                </div>
            </div>


            <div>
                <h2>
                    Convert National Currency
                </h2>


                <form onSubmit={this.handleNationalSubmit}>

                    <label>
                        National Currency Amount
                    </label>

                    <input type="text" name="quantityAmount" placeholder='The quantity of the prefered national currency' 
                    onChange={this.handleNationalCurrencyChange}/>
                     {!this.state.nationalCurrencyToCrypto.quantityAmount.validInput && <h3>{this.state.nationalCurrencyToCrypto.quantityAmount.amountErrorMessage}</h3>}

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
                            {!this.state.nationalCurrencyToCrypto.cryptoCode.validInput && <h3>{this.state.nationalCurrencyToCrypto.cryptoCode.tokenErrorMessage}</h3>}
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
                            {!this.state.nationalCurrencyToCrypto.currencyCode.validInput && <h3>{this.state.nationalCurrencyToCrypto.currencyCode.nationalCodeErrorMessage}</h3>}
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

const mapStatetoProps = (state) => ({
    resultToken : state.currencyConverterReducer.resultTokenToCountryCurrency,
    resultNational : state.currencyConverterReducer.resultCountryCurrencyToCrypto,
    error : state.currencyConverterReducer.error,
    loading: state.currencyConverterReducer.loading
})

export default connect(mapStatetoProps)(ConvertForm);