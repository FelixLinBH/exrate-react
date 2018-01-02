import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-table/dist/bootstrap-table.min.css';
import './vendor/fresh-bootstrap-table.css';
import './vendor/fonts.css';
import './vendor/from_style.css';
import './vendor/grayscale.min.css';
import './vendor/normalize.min.css';
import './vendor/bootstrap-select.min.css';
window.$ = window.jQuery = require('jquery')
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
