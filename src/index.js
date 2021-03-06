import {StrictMode} from 'react';
import {render} from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
