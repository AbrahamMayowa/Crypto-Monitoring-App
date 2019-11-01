import React from 'react'
import '../CssFile/footer.css'


const Footer = ()=>{
    return(
        <div className='footer-wrapper'>
            <ul className='footer-list'>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
            </ul>
            <div className='copyrights'>
                <h3>&#169; 2019</h3>
            </div>
        </div>
    )
}

export default Footer