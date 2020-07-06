import React, { Component } from 'react';

import Team from '../components/Team/Team';


export default class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="column _60">
                        <Team/>
                    </div>
                     <div className="column _40 padding-x-40 mobile-padding-x-30">
                      <h1>About Us</h1>

                      <p>Today, our company is a family-owned
                        business operating 21 store locations across 
                        Indiana. Each store offers a range of eye health
                        services that help patients correct and protect 
                        their vision. In addition, our stores carry a large 
                        selection of designer frames and 
                        fashion-forward eyewear for Women, Men and 
                        Kids.
                     </p>

                     <p>
                         More than 75 years later, We've helped Indiana 
                         residents maintain quality vision and find their 
                         perfect pair of eyewear still remains today 
                         throughout all our stores.
                     </p>
                     </div>
                    </div>
            </React.Fragment>
        )
    }
}