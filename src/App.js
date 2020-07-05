import React, { Component } from 'react';

import {BrowserRouter } from 'react-router-dom';

import AppRoutes from './utils/Routes';

import GlobalContext from './context/GlobalContext';

import Main from './Main/main';


export default class App extends Component {
  render() {
    return (
      <GlobalContext>
      <BrowserRouter>
      <Main/>
        {/* <AppRoutes/> */}
      </BrowserRouter>
      </GlobalContext>
      
    );
  }
 
}
