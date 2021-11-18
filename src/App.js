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

  calcImp(impInput) {
    // simplify variable names using destructuring syntax
    const { wireSize, conductorMaterial, conduitMaterial, pf } = impInput;

    // convert wire format from "#" to "num" by slicing out the first character and concatinating "num"
    const numWireSize = "num" + wireSize.slice(0, 1);

    // assign the correct value of the resistance by checking if the value of the conductor material from the form is copper. if it is not, it must be aluminum. take the values from the appropriate location of the state object.
    if (conductorMaterial === "copper") {
      const resistance =
        this.state.listOfCuACResistances.numWireSize.conduitMaterial;
    } else {
      const resistance =
        this.state.listOfAlACResistances.numWireSize.conduitMaterial;
    }

    // assign the correct value of the reactance by checking if the value of the conduit material from the form is either PVC or Aluminum. if it is not, it must be steel. take the values from the appropriate location of the state object. Note: reactance values for PVC and aluminum are the same from Table 9 of the NEC
    if (conduitMaterial === "PVC" || conduitMaterial === "aluminum") {
      const reactance = this.state.listOfReactances.numWireSize.PVCAl;
    } else {
      const reactance = this.state.listOfReactances.numWireSize.steel;
    }

    // calculate the impedance using the following equation: impedance = (Resistance * cos(arccos(pf)))+(Reactance * sin(arccos(pf))). Note: arccos(pf) is the angle of the power triangle.
    let impedance =
      resistance * Math.cos(Math.acos(pf)) +
      reactance * Math.sin(Math.acos(pf));

    return impedance;
  }

  calcAmps(ampInput) {
    // simplify variable names using destructuring syntax
    const { load, loadType, phase, voltage, pf } = ampInput;

    // if amps return amps
    if (loadType === "amps") {
      return load;
    }
    // if watts and single phase return watts/(voltage * pf)
    if (loadType === "watts" && phase === "single") {
      return load / (voltage * pf);
    }
    // if watts and three phase return watts/(voltage * pf * 1.73)
    if (loadType === "watts" && phase === "three") {
      return load / (voltage * pf * 1.73);
    }
    // if VA and single phase return VA/voltage
    if (loadType === "voltAmps" && phase === "single") {
      return load / voltage;
    }
    // if VA and three phase return VA/(voltage*1.73)
    if (loadType === "voltAmps" && phase === "three") {
      return load / (voltage * 1.73);
    }
  }

  calcVD(newVDItemInfo) {
    // simplify variable names using destructuring syntax
    const {
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
    } = newVDItemInfo;

    // create an input object for the function calls to simplify code
    const impInput = { wireSize, conductorMaterial, conduitMaterial, pf };
    const ampInput = { load, loadType, phase, voltage, pf };

    // calculate the impedance
    const impedance = this.calcImp(impInput);

    // calculate the amperage based on the form data
    const amps = this.calcAmps(ampInput);

    // 1 phase VD = impedance*(dist/1000)*Amps*2/(num parallel runs)
    // 3 phase VD = impedance*(dist/1000)*Amps*1.73/(num parallel runs)
    // console.log(vdInfo);
    if (numOfPhases === "single") {
      let voltageDrop =
        (impedance * (wireLength / 1000) * amps * 2) / parallelRuns;
    } else {
      let voltageDrop =
        (impedance * (wireLength / 1000) * amps * 1.73) / parallelRuns;
    }

    let voltageDropPercent = (voltageDrop / voltage) * 100;

    return {
      voltageDrop: voltageDrop,
      voltageDropPercent: voltageDropPercent,
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
