import React, { Component } from 'react';

import GlobalContext from './context/GlobalContext';

import Home from './home/Home';

import Layout from './_ui-layout/Layout';


export default class App extends Component {
  render() {
    return (
      <GlobalContext>
      <div>
        <Layout>
          <Home/>
        </Layout>
      </div>
      </GlobalContext>
      
    );
  }
 
}
