import React from 'react'
import {useRouteMatch, Route, Switch} from "react-router-dom";
import TokenDetails from './tokenDetailComponent'
import ConvertWrapper from './ConvertWrapper'
import {withRouter} from 'react-router'
import TopTokenList from './topTokenList';



function MainConvert(){
    // get the match object from the react-router
    const {path} = useRouteMatch()
    return(

        <div>
            <Switch>
            <Route exact path={path} component={ConvertWrapper} />
            <Route exact strict path={`${path}/:tokenName`} component={TokenDetails} />
            </Switch>
        </div>
    )
}

export default withRouter(MainConvert)

