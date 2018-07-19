import React from 'react';
import ReactDOM from 'react-dom';
import PostList from './PostList'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PostList />, document.getElementById('root'));
registerServiceWorker();
