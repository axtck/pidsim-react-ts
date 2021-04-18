import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router';
import About from '../pages/General/About/About';
import Simulator from '../pages/General/Simulator/Simulator';

interface RoutesProps { };

const Routes: FunctionComponent<RoutesProps> = () => {
    return (
        <Switch>
            {/* Simulator route */}
            <Route path="/simulator" component={Simulator} />

            {/* Extra pages */}
            <Route path="/about" component={About} />
        </Switch>
    )
}

export default Routes;
