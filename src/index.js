import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Main from './pages/Main';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
