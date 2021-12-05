import React from "react";

class Form extends React.Component {

  constructor() {
    super();
    this.uniqueId = 0;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.uniqueId +=1;
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
      wireLength: Number(event.target.wireLength.value)
      }
    this.props.calcVD(newVDItemInfo)

  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-area">
          <fieldset>
            <legend>Voltage Drop Calculator</legend>
            <div className="input-div">
              <label htmlFor="wireTag" className="form-label col-form-label">
                Wire Tag:
              </label>
              <div className="form-input">
                <input type="text" className="form-control" id="wireTag" placeholder="ex. 1A"/>
              </div>
            </div>

            <div className="input-div">
              <label htmlFor="load" className="form-label col-form-label">
                Electrical Load:
              </label>
              <div className="form-input">
                <input type="text" className="form-control" id="load" placeholder="ex. 10"/>
              </div>
            </div>

            <div className="input-div">
              <label htmlFor="loadType" className="form-label col-form-label">
                Load Type:
              </label>
              <div className="form-input">
                <select id="loadType" className="form-select">
                  <option value="amps">Amps</option>
                  <option value="watts">Watts</option>
                  <option value="voltAmps">Volt-Amps</option>
                </select>
              </div>
            </div>

            <div className="input-div">
              <label htmlFor="pf" className="form-label col-form-label">
                Power Factor:
              </label>
              <div className="form-input">
                <input type="text" className="form-control" id="pf" placeholder="ex. 0.85"/>
              </div>
            </div>

            <div className="input-div">
              <label htmlFor="voltage" className="form-label col-form-label">
                Voltage:
              </label>
              <div className="form-input">
                <select id="voltage" className="form-select">
                  <option value="120">120V</option>
                  <option value="208">208V</option>
                  <option value="277">277V</option>
                  <option value="480">480V</option>
                </select>
              </div>
            </div>

            <div className="input-div">
              <label htmlFor="numOfPhases" className="form-label col-form-label">
                Number of Phases:
              </label>
              <div className="form-input">
                <select id="numOfPhases" className="form-select">
                  <option value="single">Single Phase</option>
                  <option value="three">Three Phase</option>
                </select>
              </div>
            </div>

            <div className="input-div">
              <label htmlFor="conductorMaterial" className="form-label col-form-label">
                Conductor Material:
              </label>
              <div className="form-input">
                <select id="conductorMaterial" className="form-select">
                  <option value="copper">Copper</option>
                  <option value="aluminum">Aluminum</option>
                </select>
              </div>
            </div>

            <div className="input-div">
              <label htmlFor="conduitMaterial" className="form-label col-form-label">
                Conductor Material:
              </label>
              <div className="form-input">
                <select id="conduitMaterial" className="form-select">
                  <option value="steel">Steel</option>
                  <option value="aluminum">Aluminum</option>
                  <option value="PVC">PVC</option>
                </select>
              </div>
            </div>

            <div className="input-div">
              <label htmlFor="parallelRuns" className="form-label col-form-label">
                Number of Parallel Runs:
              </label>
              <div className="form-input">
                <input type="text" className="form-control" id="parallelRuns" placeholder="ex. 1"/>
              </div>
            </div>

            <div className="input-div">
              <label htmlFor="wireSize" className="form-label col-form-label">
                Wire Size:
              </label>
              <div className="form-input">
                <select id="wireSize" className="form-select" >
                  {this.props.listOfWireSizes.map((element, i) => {
                    return (
                      <option key={i} value={element}>
                        {element}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="input-div">
              <label htmlFor="wireLength" className="form-label col-form-label">
                Wire Length (ft):
              </label>
              <div className="form-input">
                <input type="text" className="form-control" id="wireLength" placeholder="ex. 150"/>
              </div>
            </div>
            <button type="submit" className="submit-button btn btn-primary">Submit</button>
              
            </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
