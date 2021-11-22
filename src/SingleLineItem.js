import React from 'react';

class SingleLineItem extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        let lineItemId = Number(event.target.id);
        this.props.removeLineItem(lineItemId);
    }

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
        <li>
            {
            `ID: ${id} | 
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
            <button id={id} className="btn btn-danger" onClick={this.handleClick}>X</button>
        </li>)
        ;
    }
}
 
export default SingleLineItem;

