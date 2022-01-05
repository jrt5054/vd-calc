import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.uniqueId = 0;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver() {
    
  }

  handleSubmit(event) {
    event.preventDefault();
    this.uniqueId += 1;
    let newVDItemInfo = {
      id: this.uniqueId,
      wireTag: event.target.wireTag.value,
      load: Number(event.target.load.value),
      loadType: event.target.loadType.value,
      pf: Number(event.target.pf.value),
      voltage: event.target.voltage.value,
      numOfPhases: event.target.numOfPhases.value,
      conductorMaterial: event.target.conductorMaterial.value,
      conduitMaterial: event.target.conduitMaterial.value,
      parallelRuns: Number(event.target.parallelRuns.value),
      wireSize: event.target.wireSize.value,
      wireLength: Number(event.target.wireLength.value),
    };
    this.props.calcVD(newVDItemInfo);
  }

  render() {
    return (
      <div className="form-area-div">
        <form onSubmit={this.handleSubmit} className="form-area">

          <h1>Voltage Drop Calculator</h1>

{/* WIRE TAG */}
          <div className="input-area-div">
            <label onMouseOver={this.handleMouseOver} className="form-label tooltipitem" htmlFor="wireTag" data-tooltip="TEST TEST">
              Wire Tag:
            </label>
            <input
              className="form-input"
              type="text"
              id="wireTag"
              placeholder="ex. 1A"
            />
          </div>
{/* LOAD */}
          <div className="input-area-div">
            <label htmlFor="load" className="form-label">
              Electrical Load:
            </label>
            <input
              type="text"
              className="form-input"
              id="load"
              placeholder="ex. 10"
            />
          </div>
{/* LOAD TYPE */}
          <div className="input-area-div">
            <label htmlFor="loadType" className="form-label">
              Load Type:
            </label>
            <select id="loadType" className="form-select">
              <option value="amps">Amps</option>
              <option value="watts">Watts</option>
              <option value="voltAmps">Volt-Amps</option>
            </select>
          </div>
{/* POWER FACTOR */}
          <div className="input-area-div">
            <label htmlFor="pf" className="form-label">
              Power Factor:
            </label>
            <input
              type="text"
              className="form-input"
              id="pf"
              placeholder="ex. 0.85"
            />
          </div>
{/* VOLTAGE */}
          <div className="input-area-div">
            <label htmlFor="voltage" className="form-label">
              Voltage:
            </label>
            <select id="voltage" className="form-select">
              <option value="120">120V</option>
              <option value="208">208V</option>
              <option value="277">277V</option>
              <option value="480">480V</option>
            </select>
          </div>
{/* NUMBER OF PHASES */}
          <div className="input-area-div">
            <label htmlFor="numOfPhases" className="form-label">
              Number of Phases:
            </label>
            <select id="numOfPhases" className="form-select">
              <option value="single">Single Phase</option>
              <option value="three">Three Phase</option>
            </select>
          </div>
{/* CONDUCTOR MATERIAL */}
          <div className="input-area-div">
            <label htmlFor="conductorMaterial" className="form-label">
              Conductor Material:
            </label>
            <select id="conductorMaterial" className="form-select">
              <option value="copper">Copper</option>
              <option value="aluminum">Aluminum</option>
            </select>
          </div>
{/* CONDUIT MATERIAL */}
          <div className="input-area-div">
            <label htmlFor="conduitMaterial" className="form-label">
              Conduit Material:
            </label>
            <select id="conduitMaterial" className="form-select">
              <option value="steel">Steel</option>
              <option value="aluminum">Aluminum</option>
              <option value="PVC">PVC</option>
            </select>
          </div>
{/* NUMBER OF PARALLEL RUNS */}
          <div className="input-area-div">
            <label htmlFor="parallelRuns" className="form-label">
              Number of Parallel Runs:
            </label>
            <input
              type="text"
              className="form-input"
              id="parallelRuns"
              placeholder="ex. 1"
            />
          </div>
{/* WIRE SIZE */}
          <div className="input-area-div">
            <label htmlFor="wireSize" className="form-label">
              Wire Size:
            </label>
            <select id="wireSize" className="form-select">
              {this.props.listOfWireSizes.map((element, i) => {
                return (
                  <option key={i} value={element}>
                    {element}
                  </option>
                );
              })}
            </select>
          </div>
{/* WIRE LENGTH */}
          <div className="input-area-div">
            <label htmlFor="wireLength" className="form-label">
              Wire Length (ft):
            </label>
            <input
              type="text"
              className="form-input"
              id="wireLength"
              placeholder="ex. 150"
            />
          </div>
{/* SUBMIT BUTTON */}
          <button type="submit" className="submit-button" onMouseMove={this.handleMouseOver}>
            SUBMIT
          </button>
        </form>
        <p className="copywrite">created by <a href="https://thisisjoshtaylor.com/">thisisjoshtaylor</a></p>
      </div>
    );
  }
}

export default Form;
