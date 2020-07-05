import React, { Component } from 'react';

import Avatars from '../Avatars/Avatars';


import Context from '../../context/Context';


export default class Team extends Component {
  render() {
      return (
         <React.Fragment>
             <h1>Our Team</h1>
             <div>
                 <Context.Consumer>
                     {context => 
                         context.avatars.map((data, index) => {
                             return (
                                 <div key={index} className="column">
                                    <Avatars data={data} />
                                 </div>
                             )
                         })
                     }
                 </Context.Consumer>
             </div>
         </React.Fragment>
      )
  }
}