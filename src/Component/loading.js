import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

export const Loading = () => {
    return (
        <div>
        <Loader
         type="Circles" 
         color="#somecolor" 
         height={80}
         width={100}
         timeout={3000} />
        </div>
    )
}
