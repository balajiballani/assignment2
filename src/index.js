import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import {ProductProvider} from './context'
// if we use BrowseRouter we can make it use for all the components in our application
//we can use that in App component to avoid confusion we can have it as well
ReactDOM.render(

  <React.StrictMode>
    <ProductProvider>{/* Making the data to be global so we can access it across the application */}
      <Router>
        <App/>
      </Router>
    </ProductProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
