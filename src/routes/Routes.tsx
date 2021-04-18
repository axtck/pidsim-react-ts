import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router';
import Simulator from '../pages/General/Simulator/Simulator';

interface RoutesProps { };

const Routes: FunctionComponent<RoutesProps> = () => {
    return (
        <Switch>
            {/* Simulator route */}
            <Route path="/simulator" component={Simulator} />
        </Switch>
    )
}

export default Routes;
