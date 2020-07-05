import React from 'react';
import { Route} from 'react-router-dom';

import Main from '../Main/main';

const Routes = () => {
    return ( 
    <React.Fragment >
     <Route path="/" exact component={Main}></Route>
    </React.Fragment>
    )
}