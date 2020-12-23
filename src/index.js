import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
// import 'font-awesome/css/font-awesome.min.css'; 
import Application from './components/Application.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);
