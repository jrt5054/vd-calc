import React from "react";
import "./CSS/App.css";
import Header from "./Header";
import Form from "./Form";
import List from "./List";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listOfWireSizes: [
        "#14",
        "#12",
        "#10",
        "#8",
        "#6",
        "#4",
        "#3",
        "#2",
        "#1",
        "#1/0",
        "#2/0",
        "#3/0",
        "#4/0",
        "#250",
        "#300",
        "#400",
        "#500",
        "#600",
        "#750",
        "#1000",
      ],
      listOfReactances: [
        { num14: { PVCAl: 0.058, steel: 0.073 } },
        { num12: { PVCAl: 0.054, steel: 0.068 } },
      ],
      listOfCuACResistances: [
        { num14: { PVC: 3.1, aluminum: 3.1, steel: 3.1 } },
        { num12: { PVC: 2, aluminum: 2, steel: 2 } },
      ],
      listOfAlACResistances: [
        { num14: { PVC: 3.2, aluminum: 3.2, steel: 3.2 } },
        { num12: { PVC: 2, aluminum: 2, steel: 2 } },
      ],
      infoFromForm: {
        wireTag: "",
        load: "",
        loadType: "",
        pf: "",
        voltage: "",
        numOfPhases: "",
        conductorMaterial: "",
        conduitMaterial: "",
        parallelRuns: "",
        wireSize: "",
        wireLength: "",
      },
      voltageDropItemsArray: [
        {
          wireTag: "1a",
          load: "20",
          loadType: "Amps",
          pf: "0.85",
          voltage: "480",
          numOfPhases: "Three-Phase",
          conductorMaterial: "Copper",
          conduitMaterial: "Steel",
          parallelRuns: "1",
          wireSize: "#6",
          wireLength: "150",
        },
        {
          wireTag: "2a",
          load: "30",
          loadType: "Amps",
          pf: "0.85",
          voltage: "480",
          numOfPhases: "Three-Phase",
          conductorMaterial: "Copper",
          conduitMaterial: "Steel",
          parallelRuns: "1",
          wireSize: "#1",
          wireLength: "200",
        },
      ],
    };
    this.calcVD = this.calcVD.bind(this);
  }

  calcImp(wireSize, conductorMaterial, conduitMaterial, pf) {
    // convert #12 to num12
    let numWireSize = "num" + wireSize.slice(0, 1);
    if (conductorMaterial === "copper") {
      let resistance =
        this.state.listOfCuACResistances.numWireSize.conduitMaterial;
    } else {
      let resistance =
        this.state.listOfAlACResistances.numWireSize.conduitMaterial;
    }

    if (conduitMaterial === "PVC" || conduitMaterial === "aluminum") {
      let reactance = this.state.listOfReactances.numWireSize.PVCAl;
    } else {
      let reactance = this.state.listOfReactances.numWireSize.steel;
    }

    // impedance = (Resistance * cos(arccos(pf)))+(Reactance * sin(arccos(pf)))
    let impedance =
      resistance * Math.cos(Math.acos(pf)) +
      reactance * Math.sin(Math.acos(pf));

    return impedance;
  }

  calcAmps(load, loadType, phase, voltage, pf) {
    // if amps return amps
    // if watts and single phase return watts/(pf * voltage)
    // if watts and three phase return watts/(pf * voltage*1.73)
    // if VA and single phase return VA/voltage
    // if VA and three phase return VA/(voltage*1.73)
  }

  calcVD(newVDItemInfo) {
    let impedance = this.calcImp(
      newVDItemInfo.wireSize,
      newVDItemInfo.conductorMaterial,
      newVDItemInfo.conduitMaterial,
      newVDItemInfo.pf
    );
    //this function is called in handleSubmit() in Form.js. it will utilize the form data to perform the VD calc and then report all of the form data plus the VD calc result in an object to the array voltageDropItemsArray

    // 1 phase VD = impedance*(dist/1000)*Amps*2/(num parallel runs)
    // 3 phase VD = impedance*(dist/1000)*Amps*1.73/(num parallel runs)
    // console.log(vdInfo);
    let amps = calcAmps;

    if (newVDItemInfo.numOfPhases === "single") {
      let voltageDrop =
        (impedance * (newVDItemInfo.wireLength / 1000) * amps * 2) /
        newVDItemInfo.parallelRuns;
    } else {
      let voltageDrop =
        (impedance * (newVDItemInfo.wireLength / 1000) * amps * 1.73) /
        newVDItemInfo.parallelRuns;
    }

    let voltageDropPercent = (voltageDrop / newVDItemInfo.voltage) * 100;

    return { 
      voltageDrop: voltageDrop, 
      voltageDropPercent: voltageDropPercent 
    };
  }

  render() {
    return (
      <div className="background">
        <Header headerName="Voltage Drop Calculator" />
        <Form
          listOfWireSizes={this.state.listOfWireSizes}
          calcVD={this.calcVD}
        />
        <List voltageDropItemsArray={this.state.voltageDropItemsArray} />
      </div>
    );
  }
}

export default App;
