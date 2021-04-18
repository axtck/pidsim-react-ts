import React, { FunctionComponent } from 'react';
import LineChart from '../../../components/Chart/LineChart';
import { countries } from "../../../data/dummy";

interface SimulatorProps { };

const Simulator: FunctionComponent<SimulatorProps> = () => {
    return (
        <div>
            <div style={{ height: 400 }}>
                <LineChart data={countries} />
            </div>
        </div>
    );
}

export default Simulator;
