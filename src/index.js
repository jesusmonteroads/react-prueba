import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Playlist from './playlist/components/playlist';
import data from './api.json';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Playlist data={data}/>, document.getElementById('root'));
registerServiceWorker();
