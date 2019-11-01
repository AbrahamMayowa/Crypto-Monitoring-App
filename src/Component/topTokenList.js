import React from 'react'
import bitcoinCash from '../Files/bitcoincash1.png'
import litecoin from '../Files/litecoin.svg'
import xrp from '../Files/xrp.png'
import '../CssFile/topTokenList.css'

export default function TopTokenList({topTokenList}){
    
    return (

        <div className='table-wrapper'>
            <table className='table'>
                <thead className='table-header'>
                    <tr>
                        <th>Crypto</th>
                        <th>Price in USD</th>
                        <th>Price change % in 24hrs</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {topTokenList.map((item) =>

                        <tr key={item.last_price}>
                                <td>{item.coin_name}</td>
                                <td>{Number.parseFloat(item.last_price).toFixed(3)}</td>
                                <td>{item.price_24hr_pcnt}</td>
                                <td>{item.volume_24hr}</td>

                        </tr>
                        
                    )}
                </tbody>
            </table>

        </div>
    )
        }