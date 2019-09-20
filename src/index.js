import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ConvertForm from './converterForm';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ConvertForm />, document.getElementById('root'));

serviceWorker.unregister();
