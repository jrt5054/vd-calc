import React from "react";

class SingleLineItem extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
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
      voltageDropPercent,
    } = this.props.lineItem;
    return (
      <li>
        <svg
          className="close-button"
          id={id}
          onClick={this.handleClick}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" />
        </svg>
        <p className="wire-title">{`Wire ${wireTag}`}</p><br />
        <span className="underline">Input:</span>{` Load: ${load} ${loadType}, 
            Power Factor: ${pf}, 
            Voltage: ${voltage}V, 
            Phase: ${numOfPhases}`} <br />
            {`Conductor Material: ${conductorMaterial}, 
            Conduit Material: ${conduitMaterial}`} <br />
            {`# of Parallel Runs: ${parallelRuns} 
            Wire Size: ${wireSize}, 
            Wire Length: ${wireLength}ft`}
        <br />
        <br />
        <p className="bold">
          {`Voltage Drop: ${voltageDrop}V`}
          <br />
          {`Voltage Drop Percent: ${voltageDropPercent}%`}
        </p>
      </li>
    );
  }
}

export default SingleLineItem;
