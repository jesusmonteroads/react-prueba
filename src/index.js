import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Media from './playlist/components/Media';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Media title={2000000} author='Jesus Montero Cabrera' image='./images/bitcoin.jpg'/>, document.getElementById('root'));
registerServiceWorker();
