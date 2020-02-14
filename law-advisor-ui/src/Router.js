import React from 'react';
import Home from './views/Home'
import View from './views/View'

import {
    Switch,
    Route,
} from "react-router-dom";

export default () => (
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/view/:type/:id">
            <View/>
        </Route>
    </Switch>
)
