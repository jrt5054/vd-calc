import React from 'react';

class SingleLineItem extends React.Component {
    render() { 
        // simplify variable names using destructuring syntax
        let {
            id,
            wireTag,
            load,
            loadType,
            pf,
            voltage,
            numOfPhases,
            conductorMaterial,
            conduitMaterial,
            parallelRuns,
            wireSize,
            wireLength,
            voltageDrop,
            voltageDropPercent
        } = this.props.lineItem;
        return (
        <li key={this.props.lineItem.id}>
            {`ID: ${id} | 
            Wire Tag: ${wireTag} | 
            Load: ${load} ${loadType} | 
            Power Factor: ${pf} | 
            Voltage: ${voltage}V | 
            Phase: ${numOfPhases} | 
            Conductor Material: ${conductorMaterial} | 
            Conduit Material: ${conduitMaterial} | 
            # of Parallel Runs: ${parallelRuns} | 
            Wire Size: ${wireSize} | 
            Wire Length: ${wireLength}ft | 
            Voltage Drop: ${voltageDrop}V | 
            Voltage Drop Percent: ${voltageDropPercent}%`
            }
            
        </li>)
        ;
    }
}
 
export default SingleLineItem;

