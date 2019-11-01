import {topTokenDetailsBegin, topTokenDetailsFailure, topTokenDetailsSuccess} from './topTokenAction';


const eachToken = (code) => {
  return fetch(`https://bravenewcoin-v1.p.rapidapi.com/ticker?show=usd&coin=${code}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
      "x-rapidapi-key": "d3b14e840fmsh149fe1c03f54c21p181a98jsnf654e8b2b698"
  }
  }).then(
    res => res.json()
  ).then(result => {
    if(result.error){
        throw(result.error);
    }
    return result;
  }).catch(error => {
    return error;
  }
  );
  }

const urls = [
  eachToken('btc'), eachToken('eth'), eachToken('xrp'),
  eachToken('ltc'), eachToken('bch')
]

export default function topTokenAction(){
  return dispatch => {
    dispatch(topTokenDetailsBegin());
    return Promise.all(urls
    ).then(allResults => {
      // using session to save the tokens. the session is retrive at topTokenComponent
      sessionStorage.setItem('topTokens', JSON.stringify(allResults))
      dispatch(topTokenDetailsSuccess(allResults));
    })
    .catch(error => {
      dispatch(topTokenDetailsFailure(error));
    })
  };
}








