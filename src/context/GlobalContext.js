import React, { Component } from 'react';

import uifaces from '../utils/uifaces-api';

import Context from './Context';

export default class GlobalContext extends Component {
    state = {
        avatars: [{}]
    }

    componentDidMount() {
     this.getUIAvatars()
    }

    getUIAvatars = () => {
     uifaces.get(null, {
     params: {
      limit: 6
     }
     }).then( response => {
        return this.setState({
          avatars:response.data
        })
     }).catch( error => {
        console.error("Unable to fetch avatars", error)
     })
    }
    render() {
        return (
         <Context.Provider value={{avatars: this.state.avatars}}>
          {this.props.children}
         </Context.Provider>
        )
    }
}