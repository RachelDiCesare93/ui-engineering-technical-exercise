import React, { Component } from 'react';

import './Layout.css';

export default class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <main className="app">
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}