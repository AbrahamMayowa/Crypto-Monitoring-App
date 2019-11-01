import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Component/MainComponent'
import { BrowserRouter} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.css'


ReactDOM.render(
<BrowserRouter><Main /></BrowserRouter>, 
document.getElementById('root'));
