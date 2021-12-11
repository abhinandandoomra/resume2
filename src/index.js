import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from "./covid_searchbar";
import Card from './covid_left';
import Table from "./table_covid";
import './search_bar.css'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Search />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
