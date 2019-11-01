import React from 'react'
import {connect} from 'react-redux'
import Error from './error'
import {Loading} from './loading'
import DetailsDisplay from './detailsDisplay'
import Footer from './footer'
import ConvertForm from './converterForm';
import converterForm from './converterForm'
import '../CssFile/details-wrapper.css'

class View extends React.Component{

    render(){

    const {error, loading, tokenData} = this.props

    let element;

    if(loading){
        element = <Loading />
    }else if(error){
        element = <Error error={error}/>
    }else{
        element = <div className='details'><DetailsDisplay data={tokenData} /></div>
    }

    return(
        <div className='main'>
            
            {element}
            <div className='form'>
                <ConvertForm />
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )


};

}

const mapStateToProps = state => ({
    error: state.gotTokenDetailsReducer.error,
    loading: state.gotTokenDetailsReducer.loading,
    tokenData: state.gotTokenDetailsReducer.singleTokenLiveDetails
})

export default connect(mapStateToProps)(View)