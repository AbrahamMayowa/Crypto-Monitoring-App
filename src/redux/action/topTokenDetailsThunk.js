import {topTokenDetailsBegin, topTokenDetailsFailure, topTokenDetailsSuccess} from './topTokenAction';
import { GET_TOKEN_DETAILS_BEGIN } from './getTokenDetails';

const urlAbstraction = (cryptoCode) => `https://bravenewcoin-v1.p.rapidapi.com/ticker/${cryptoCode}`;


const urls = [
  urlAbstraction('btc'), urlAbstraction('eth'), urlAbstraction('xrp'),
  urlAbstraction('ltc'), urlAbstraction('bch')
]

export default function topTokenAction(){
  return dispatch => {
    dispatch(topTokenDetailsBegin());
    return Promise.all(
      urls.map(url =>
        fetch(url, {
          headers: {"x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
          "x-rapidapi-key": "d3b14e840fmsh149fe1c03f54c21p181a98jsnf654e8b2b698"}
        }).then(res => res.json())
        .then(json => json.result)
        )
    ).then(allResults => {
      console.log(allResults);
      dispatch(topTokenDetailsSuccess(allResults));
    })
  };
}







