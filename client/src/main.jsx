import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const Main = () => (
  <React.StrictMode>
   <App></App>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
