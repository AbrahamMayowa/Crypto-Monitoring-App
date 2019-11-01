import React from 'react'
import {Provider} from 'react-redux'
import {store} from '../redux/storeConfiguration'
import View from './detailsView'

const TokenDetails = () => {
    return(
        <div>
            <Provider store={store}>
                <div>
                    <View />
                </div>

            </Provider>
        </div>

    )
    

}
export default TokenDetails