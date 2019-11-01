import React from 'react'
import Logo from './LogoHeader'
import Navigation from './NavigitionBar'
import '../CssFile/header.css'



class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            active: false

        }
    }
    handleMenuToggle = ()=>{
        
        this.setState(prevState =>({
            active: !prevState.active
        }))
        
    }
    render(){
        let activeToggle = this.state.active ? 'active' : ''
    return(
        <div className='main-wrapper'>
            <div className='HeaderWrapper'>
                    <div>
                    <Logo />
                    </div>
                    <div className='menu-icon' onClick={this.handleMenuToggle}>
                        <i className="fas fa-bars fa-xs"></i>
                    </div>

                <div className={`nav-list ${activeToggle}`}>
                    <Navigation handleToggle={this.handleMenuToggle}/>
                </div>
            </div>
        </div>
        
    )
    }
}

export default Header