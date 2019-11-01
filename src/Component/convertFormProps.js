import React, {Component} from 'react'
import {cryptoToCurrencyThunk, currencyToCryptoThunk} from '../redux/action/ConvertApiThunkAction';
import {redirectToNational} from '../redux/action/redirectDestination'

export default class FormPropsRender extends Component{
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
          // to ensure redirection to appropriate component
          // check the its action module to understand it better
          this.props.dispatch(redirectToNational());

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
          return(
              <div>
              {this.props.render(this.state, this.handleCryptoChange, this.handleNationalCurrencyChange, this.handleCryptoSubmit, this.handleNationalSubmit)}
              </div>
          )
      }



}





