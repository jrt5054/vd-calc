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
      <div className="container-fluid pt-3 pb-3">
        <form onSubmit={this.handleSubmit}>
          <div className="row mb-3">
            <label htmlFor="wireTag" className="col-sm-3 col-form-label">
              Wire Tag:
            </label>
            <div className="col-sm-5">
              <input type="text" className="form-control" id="wireTag" defaultValue="1a" />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="load" className="col-sm-3 col-form-label">
              Electrical Load:
            </label>
            <div className="col-sm-5">
              <input type="text" className="form-control" id="load" defaultValue="10" />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="loadType" className="col-sm-3 col-form-label">
              Load Type:
            </label>
            <div className="col-sm-5">
              <select id="loadType" className="form-select">
                <option value="amps">Amps</option>
                <option value="watts">Watts</option>
                <option value="voltAmps">Volt-Amps</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="pf" className="col-sm-3 col-form-label">
              Power Factor:
            </label>
            <div className="col-sm-5">
              <input type="text" className="form-control" id="pf" defaultValue="0.8"/>
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="voltage" className="col-sm-3 col-form-label">
              Voltage:
            </label>
            <div className="col-sm-5">
              <select id="voltage" className="form-select" defaultValue="480">
                <option value="120">120V</option>
                <option value="208">208V</option>
                <option value="277">277V</option>
                <option value="480">480V</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="numOfPhases" className="col-sm-3 col-form-label">
              Number of Phases:
            </label>
            <div className="col-sm-5">
              <select id="numOfPhases" className="form-select" defaultValue="three">
                <option value="single">Single Phase</option>
                <option value="three">Three Phase</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="conductorMaterial" className="col-sm-3 col-form-label">
              Conductor Material:
            </label>
            <div className="col-sm-5">
              <select id="conductorMaterial" className="form-select">
                <option value="copper">Copper</option>
                <option value="aluminum">Aluminum</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="conduitMaterial" className="col-sm-3 col-form-label">
              Conductor Material:
            </label>
            <div className="col-sm-5">
              <select id="conduitMaterial" className="form-select">
                <option value="steel">Steel</option>
                <option value="aluminum">Aluminum</option>
                <option value="PVC">PVC</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="parallelRuns" className="col-sm-3 col-form-label">
              Number of Parallel Runs:
            </label>
            <div className="col-sm-5">
              <input type="text" className="form-control" id="parallelRuns" defaultValue="1" />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="wireSize" className="col-sm-3 col-form-label">
              Wire Size:
            </label>
            <div className="col-sm-5">
              <select id="wireSize" className="form-select" defaultValue="#12">
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

          <div className="row mb-3">
            <label htmlFor="wireLength" className="col-sm-3 col-form-label">
              Wire Length:
            </label>
            <div className="col-sm-5">
              <input type="text" className="form-control" id="wireLength" defaultValue="100" />
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">Add</button>
            </div>

        </form>
      </div>
    );
  }
}

export default Form;
