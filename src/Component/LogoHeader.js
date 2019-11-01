import React from 'react'
import logo from '../Files/weblogo1.jpg'
import '../CssFile/logo.css'
import {Link } from 'react-router-dom'

const Logo = ()=>{
    return (
        <div className='wrapper'>
                <Link to='/'>
                    <div className='logo-link'>
                        <img src={logo} alt='BlockToken Logo' />
                        <h2>BlockToken</h2>
                    </div>
                </Link>

        </div>
    )
}

export default Logo