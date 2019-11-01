import React from 'react'
import '../CssFile/NavigationBar.css'
import {Link} from 'react-router-dom'


const Navigation = ({handleToggle}) =>{
    return(
        <div className='navWrapper'>
                <div className='menu-close' onClick={handleToggle}><i className="fas fa-times fa-lg"></i></div>
                <ul>
                    <li><span className='icon'><i className="fas fa-home"></i>
                    
                    </span><Link to='/'>Home</Link></li>

                    <li><span className='icon'><i className="fas fa-book-open"></i>
                    
                    </span>About</li>
                    <li><span className='icon'><i className="fas fa-address-book"></i></span>Contact</li>
                </ul>
        </div>
    )
}

export default Navigation