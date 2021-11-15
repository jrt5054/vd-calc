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
    let newVDItem = {
      id: this.uniqueId,
      wireTag: event.target.wireTag.value,
      load: event.target.load.value,
      loadType: event.target.loadType.value,
      pf: event.target.pf.value,
      voltage: event.target.voltage.value,
      numOfPhases: event.target.numOfPhases.value,
      conductorMaterial: event.target.conductorMaterial.value,
      conduitMaterial: event.target.conduitMaterial.value,
      parallelRuns: event.target.parallelRuns.value,
      wireSize: event.target.wireSize.value,
      wireLength: event.target.wireLength.value
      }
    this.props.calcVD(newVDItem)

  }
  
  render() {
    return (
      <div className="container-fluid pt-3 pb-3">
        <form onSubmit={this.handleSubmit}>
          <div class="row mb-3">
            <label htmlFor="wireTag" class="col-sm-3 col-form-label">
              Wire Tag:
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="wireTag" />
            </div>
          </div>

          <div class="row mb-3">
            <label htmlFor="load" class="col-sm-3 col-form-label">
              Electrical Load:
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="load" />
            </div>
          </div>

          <div class="row mb-3">
            <label htmlFor="loadType" class="col-sm-3 col-form-label">
              Load Type:
            </label>
            <div class="col-sm-5">
              <select id="loadType" className="form-select">
                <option value="amps">Amps</option>
                <option value="watts">Watts</option>
                <option value="voltAmps">Volt-Amps</option>
              </select>
            </div>
          </div>

          <div class="row mb-3">
            <label htmlFor="pf" class="col-sm-3 col-form-label">
              Power Factor:
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="pf" />
            </div>
          </div>

          <div class="row mb-3">
            <label htmlFor="voltage" class="col-sm-3 col-form-label">
              Voltage:
            </label>
            <div class="col-sm-5">
              <select id="voltage" className="form-select">
                <option value="120v">120V</option>
                <option value="208v">208V</option>
                <option value="277v">277V</option>
                <option value="480v">480V</option>
              </select>
            </div>
          </div>

          <div class="row mb-3">
            <label htmlFor="numOfPhases" class="col-sm-3 col-form-label">
              Number of Phases:
            </label>
            <div class="col-sm-5">
              <select id="numOfPhases" className="form-select">
                <option value="single">Single Phase</option>
                <option value="three">Three Phase</option>
              </select>
            </div>
          </div>

          <div class="row mb-3">
            <label htmlFor="conductorMaterial" class="col-sm-3 col-form-label">
              Conductor Material:
            </label>
            <div class="col-sm-5">
              <select id="conductorMaterial" className="form-select">
                <option value="copper">Copper</option>
                <option value="aluminum">Aluminum</option>
              </select>
            </div>
          </div>

          <div class="row mb-3">
            <label htmlFor="conduitMaterial" class="col-sm-3 col-form-label">
              Conductor Material:
            </label>
            <div class="col-sm-5">
              <select id="conduitMaterial" className="form-select">
                <option value="steel">Steel</option>
                <option value="aluminum">Aluminum</option>
                <option value="PVC">PVC</option>
              </select>
            </div>
          </div>

          <div class="row mb-3">
            <label htmlFor="parallelRuns" class="col-sm-3 col-form-label">
              Number of Parallel Runs:
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="parallelRuns" />
            </div>
          </div>

          <div class="row mb-3">
            <label htmlFor="wireSize" class="col-sm-3 col-form-label">
              Wire Size:
            </label>
            <div class="col-sm-5">
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
          </div>

          <div class="row mb-3">
            <label htmlFor="wireLength" class="col-sm-3 col-form-label">
              Wire Length:
            </label>
            <div class="col-sm-5">
              <input type="text" class="form-control" id="wireLength" />
            </div>
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary">Add</button>
            </div>

        </form>
      </div>
    );
  }
}

export default Form;
