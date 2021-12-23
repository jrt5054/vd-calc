import React from "react";
import "./CSS/App.css";
import Form from "./Form";
import SingleLineItem from "./SingleLineItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      vdItemArray: [],
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
      // The following array has its values taken from the 2017 NEC Chapter 9 Table 9
      listOfReactances: [
        { wire: "num14", PVC: 0.058, aluminum: 0.058, steel: 0.073 },
        { wire: "num12", PVC: 0.054, aluminum: 0.054, steel: 0.068 },
        { wire: "num10", PVC: 0.05, aluminum: 0.05, steel: 0.063 },
        { wire: "num8", PVC: 0.052, aluminum: 0.052, steel: 0.065 },
        { wire: "num6", PVC: 0.051, aluminum: 0.051, steel: 0.064 },
        { wire: "num4", PVC: 0.048, aluminum: 0.048, steel: 0.06 },
        { wire: "num3", PVC: 0.047, aluminum: 0.047, steel: 0.059 },
        { wire: "num2", PVC: 0.045, aluminum: 0.045, steel: 0.057 },
        { wire: "num1", PVC: 0.046, aluminum: 0.046, steel: 0.057 },
        { wire: "num1/0", PVC: 0.044, aluminum: 0.044, steel: 0.055 },
        { wire: "num2/0", PVC: 0.043, aluminum: 0.043, steel: 0.054 },
        { wire: "num3/0", PVC: 0.042, aluminum: 0.042, steel: 0.052 },
        { wire: "num4/0", PVC: 0.041, aluminum: 0.041, steel: 0.051 },
        { wire: "num250", PVC: 0.041, aluminum: 0.041, steel: 0.052 },
        { wire: "num300", PVC: 0.041, aluminum: 0.041, steel: 0.051 },
        { wire: "num350", PVC: 0.04, aluminum: 0.04, steel: 0.05 },
        { wire: "num400", PVC: 0.04, aluminum: 0.04, steel: 0.049 },
        { wire: "num500", PVC: 0.039, aluminum: 0.039, steel: 0.048 },
        { wire: "num600", PVC: 0.039, aluminum: 0.039, steel: 0.048 },
        { wire: "num750", PVC: 0.038, aluminum: 0.038, steel: 0.048 },
        { wire: "num1000", PVC: 0.037, aluminum: 0.037, steel: 0.046 },
      ],
      // The following array has its values taken from the 2017 NEC Chapter 9 Table 9
      listOfCuACResistances: [
        { wire: "num14", PVC: 3.1, aluminum: 3.1, steel: 3.1 },
        { wire: "num12", PVC: 2, aluminum: 2, steel: 2 },
        { wire: "num10", PVC: 1.2, aluminum: 1.2, steel: 1.2 },
        { wire: "num8", PVC: 0.78, aluminum: 0.78, steel: 0.78 },
        { wire: "num6", PVC: 0.49, aluminum: 0.49, steel: 0.49 },
        { wire: "num4", PVC: 0.31, aluminum: 0.31, steel: 0.31 },
        { wire: "num3", PVC: 0.25, aluminum: 0.25, steel: 0.25 },
        { wire: "num2", PVC: 0.19, aluminum: 0.2, steel: 0.2 },
        { wire: "num1", PVC: 0.15, aluminum: 0.16, steel: 0.16 },
        { wire: "num1/0", PVC: 0.12, aluminum: 0.13, steel: 0.12 },
        { wire: "num2/0", PVC: 0.1, aluminum: 0.1, steel: 0.1 },
        { wire: "num3/0", PVC: 0.077, aluminum: 0.082, steel: 0.079 },
        { wire: "num4/0", PVC: 0.062, aluminum: 0.067, steel: 0.063 },
        { wire: "num250", PVC: 0.052, aluminum: 0.057, steel: 0.054 },
        { wire: "num300", PVC: 0.044, aluminum: 0.049, steel: 0.045 },
        { wire: "num350", PVC: 0.038, aluminum: 0.043, steel: 0.039 },
        { wire: "num400", PVC: 0.033, aluminum: 0.038, steel: 0.035 },
        { wire: "num500", PVC: 0.027, aluminum: 0.032, steel: 0.029 },
        { wire: "num600", PVC: 0.023, aluminum: 0.028, steel: 0.025 },
        { wire: "num750", PVC: 0.019, aluminum: 0.024, steel: 0.021 },
        { wire: "num1000", PVC: 0.015, aluminum: 0.019, steel: 0.018 }
      ],
      // The following array has its values taken from the 2017 NEC Chapter 9 Table 9
      listOfAlACResistances: [
        // { wire: "num14", PVC: 0., aluminum: 0., steel: 0. }, this needs to be handled becasue there is no value for #14 aluminum wire
        { wire: "num12", PVC: 3.2, aluminum: 3.2, steel: 3.2 },
        { wire: "num10", PVC: 2, aluminum: 2, steel: 2 },
        { wire: "num8", PVC: 1.3, aluminum: 1.3, steel: 1.3 },
        { wire: "num6", PVC: 0.81, aluminum: 0.81, steel: 0.81 },
        { wire: "num4", PVC: 0.51, aluminum: 0.51, steel: 0.51 },
        { wire: "num3", PVC: 0.4, aluminum: 0.41, steel: 0.4 },
        { wire: "num2", PVC: 0.32, aluminum: 0.32, steel: 0.32 },
        { wire: "num1", PVC: 0.25, aluminum: 0.26, steel: 0.25 },
        { wire: "num1/0", PVC: 0.2, aluminum: 0.21, steel: 0.2 },
        { wire: "num2/0", PVC: 0.16, aluminum: 0.16, steel: 0.16 },
        { wire: "num3/0", PVC: 0.13, aluminum: 0.13, steel: 0.13 },
        { wire: "num4/0", PVC: 0.1, aluminum: 0.11, steel: 0.1 },
        { wire: "num250", PVC: 0.085, aluminum: 0.09, steel: 0.086 },
        { wire: "num300", PVC: 0.071, aluminum: 0.076, steel: 0.072 },
        { wire: "num350", PVC: 0.061, aluminum: 0.066, steel: 0.063 },
        { wire: "num400", PVC: 0.054, aluminum: 0.059, steel: 0.055 },
        { wire: "num500", PVC: 0.043, aluminum: 0.048, steel: 0.045 },
        { wire: "num600", PVC: 0.036, aluminum: 0.041, steel: 0.038 },
        { wire: "num750", PVC: 0.029, aluminum: 0.034, steel: 0.031 },
        { wire: "num1000", PVC: 0.023, aluminum: 0.027, steel: 0.025 }
      ]
    };
    // the following functions have their 'this' bound to App.js
    this.calcVD = this.calcVD.bind(this);
    this.addLineItem = this.addLineItem.bind(this);
    this.removeLineItem = this.removeLineItem.bind(this);
  }
  // The following function takes a number input and returns it rounded to two decimal places
  roundToTwoDec(num){
    return Math.round( ( num + Number.EPSILON ) * 100) / 100;
  }

  // The following function takes a new object line item and updates the state with new object.
  addLineItem(newLineItem) {
    let updatedLineItem = [...this.state.vdItemArray, newLineItem];
    this.setState({vdItemArray: updatedLineItem})
  }

  // The following function takes an ID as an input, 
  removeLineItem(idToRemove) {
    let updatedList = [...this.state.vdItemArray];
    let index = updatedList.findIndex(item => item.id === idToRemove)
    updatedList.splice(index,1);
    this.setState({vdItemArray: updatedList})
  }

  calcImp(impInput) {
    // simplify variable names using destructuring syntax
    const { wireSize, conductorMaterial, conduitMaterial, pf } = impInput;
    const { listOfAlACResistances, listOfCuACResistances, listOfReactances } =
      this.state;
    // initialize variables since they are only generated inside if statements
    let resistance;
    let reactance;

    // convert wire format from "#" to "num" by removing the first character (#) and concatinating "num"
    const numWireSizeFromForm = "num" + wireSize.slice(1);

    // assign the correct value of the resistance by checking if the value of the conductor material from the form is copper. if it is not, it must be aluminum. take the values from the appropriate location of the state object.
    if (conductorMaterial === "copper") {
      // use find() to search through the array for objects with a wire property value of what is stored in numWireSizeFromForm. what is returned is the object with the corresponding wire property
      // Once found, pull out the correct value by searching for the property of conduitMaterial and assigning it to 'resistance'
      let wireProperties = listOfCuACResistances.find((element) => {
        return element.wire === numWireSizeFromForm;
      });
      resistance = wireProperties[conduitMaterial];
    } else {
      let wireProperties = listOfAlACResistances.find((element) => {
        return element.wire === numWireSizeFromForm;
      });
      resistance = wireProperties[conduitMaterial];
    }

    // use find() to search through the array for objects with a wire property value of what is stored in numWireSizeFromForm. what is returned is the object with the corresponding wire property
    // Once found, pull out the correct value by searching for the property of conduitMaterial and assigning it to 'reactance'
    let wireProperties = listOfReactances.find((element) => {
      return element.wire === numWireSizeFromForm;
    });
    reactance = wireProperties[conduitMaterial];

    // calculate the impedance using the following equation: impedance = (Resistance * cos(arccos(pf)))+(Reactance * sin(arccos(pf))). Note: arccos(pf) is the angle of the power triangle.
    let impedance =
      resistance * Math.cos(Math.acos(pf)) +
      reactance * Math.sin(Math.acos(pf));

    console.log(`Reactance: ${reactance}`);
    console.log(`Resistance: ${resistance}`);
    console.log(`Impedance: ${impedance}`);

    return impedance;
  }

  calcAmps(ampInput) {
    // simplify variable names using destructuring syntax
    let { load, loadType, numOfPhases, voltage, pf } = ampInput;

    // if amps return amps
    if (loadType === "amps") {
      return load;
    }
    // if watts and single phase return watts/(voltage * pf)
    if (loadType === "watts" && numOfPhases === "single") {
      return load / (voltage * pf);
    }
    // if watts and three phase return watts/(voltage * pf * 1.73)
    if (loadType === "watts" && numOfPhases === "three") {
      return load / (voltage * pf * 1.73);
    }
    // if VA and single phase return VA/voltage
    if (loadType === "voltAmps" && numOfPhases === "single") {
      return load / voltage;
    }
    // if VA and three phase return VA/(voltage*1.73)
    if (loadType === "voltAmps" && numOfPhases === "three") {
      return load / (voltage * 1.73);
    }
  }

  calcVD(newVDItemInfo) {
    // simplify variable names using destructuring syntax
    let {
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

    let voltageDrop;

    console.log(`Wire Tag: ${wireTag}`);
    // create an input object for the function calls to simplify code
    const impInput = { wireSize, conductorMaterial, conduitMaterial, pf };
    const ampInput = { load, loadType, numOfPhases, voltage, pf };

    // calculate the impedance
    const impedance = this.calcImp(impInput);
    // console.log(`this is the impedance from calcImp(): ${impedance}`)

    // calculate the amperage based on the form data
    const amps = this.calcAmps(ampInput);
    // console.log(`this is the amps from calcAmps(): ${amps}A`)

    // 1 phase VD = impedance*(dist/1000)*Amps*2/(num parallel runs)
    // 3 phase VD = impedance*(dist/1000)*Amps*1.73/(num parallel runs)
    // console.log(vdInfo);
    if (numOfPhases === "single") {
      voltageDrop = (impedance * (wireLength / 1000) * amps * 2) / parallelRuns;
    } else {
      voltageDrop =
        (impedance * (wireLength / 1000) * amps * 1.73) / parallelRuns;
    }

    let voltageDropPercent = (voltageDrop / voltage) * 100;

    console.log(`Voltage Drop: ${voltageDrop}`);
    console.log(`Voltage Drop Percent: ${voltageDropPercent}`);

    newVDItemInfo.voltageDrop = this.roundToTwoDec(voltageDrop);
    newVDItemInfo.voltageDropPercent = this.roundToTwoDec(voltageDropPercent);

    this.addLineItem(newVDItemInfo)

    // return {
    //   voltageDrop: voltageDrop,
    //   voltageDropPercent: voltageDropPercent,
    // };
  }

  render() {
    return (
      <div className="background">
        {/* <Header headerName="Voltage Drop Calculator" /> */}
        <Form
          listOfWireSizes={this.state.listOfWireSizes}
          calcVD={this.calcVD}
        />
        <div className="results-area">
          <p className="results-header">Results</p>
          <ol className="results-list">
              {this.state.vdItemArray.map((singleElement)=>{
                  return <SingleLineItem key={singleElement.id} lineItem={singleElement} removeLineItem={this.removeLineItem} />
              })}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
