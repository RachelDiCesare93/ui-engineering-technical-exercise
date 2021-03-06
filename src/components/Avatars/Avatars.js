import React, { Component } from 'react';

import './Avatars.css'



export default class Avatars extends Component {
 render() {
     const { data } = this.props;
     return (
         <div className="avatar">
             <div className="photo">
             <img src={data.photo} alt={data.name} />
             </div>
            <span>{data.name}</span>
         </div>
     )
 }
};