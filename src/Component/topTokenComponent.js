import {connect} from 'react-redux'
import React, {Component} from 'react'
import {withRouter} from 'react-router'
import topTokenAction from '../redux/action/topTokenThunk'
import {topTokenDetailsSuccess} from '../redux/action/topTokenAction';
import {Loading} from './loading'
import  TopTokenList from './topTokenList'
import Error from './error'



class TopTokens extends Component{
    componentDidMount(){
        // the session is set at the action thunk function
        const sessionData = sessionStorage.getItem('topTokens')
        if(sessionData){
            this.props.dispatch(topTokenDetailsSuccess(JSON.parse(sessionData)))
        }else{
        this.props.dispatch(topTokenAction())
        }
    }

    render(){
        const {loading, error, topTokenList} = this.props
           if(loading){
               return (
                   <div>
                       <Loading />
                   </div>
               )
           }else if(topTokenList){
               return (
                   <div>
                     <TopTokenList topTokenList={topTokenList}/> 
                   </div>
               )
           }else{
               return(
                   <div>
                       <Error error={error} />
                   </div>
               )
           }
    }

}

const mapStateToProps = (state) => ({
    error : state.topTokenReducer.error,
    loading: state.topTokenReducer.loading,
    topTokenList: state.topTokenReducer.topTokenList
})

export default withRouter(connect(mapStateToProps)(TopTokens))