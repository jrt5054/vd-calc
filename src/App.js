import React from 'react';
import './CSS/App.css'
import Header from './Header';
import Form from './Form';
import List from './List';

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
            "#1000"
          ],
          infoFromForm: {
              wireTag: '',
              load: '',
              loadType: '',
              pf: '',
              voltage: '',
              numOfPhases: '',
              conductorMaterial: '',
              conduitMaterial: '',
              parallelRuns: '',
              wireSize: '',
              wireLength: ''
          },
          voltageDropItemsArray: [
            {
            wireTag: '1a',
            load: '20',
            loadType: 'Amps',
            pf: '0.85',
            voltage: '480',
            numOfPhases: 'Three-Phase',
            conductorMaterial: 'Copper',
            conduitMaterial: 'Steel',
            parallelRuns: '1',
            wireSize: '#6',
            wireLength: '150'
            },
            {
            wireTag: '2a',
            load: '30',
            loadType: 'Amps',
            pf: '0.85',
            voltage: '480',
            numOfPhases: 'Three-Phase',
            conductorMaterial: 'Copper',
            conduitMaterial: 'Steel',
            parallelRuns: '1',
            wireSize: '#1',
            wireLength: '200'
            }]
        };
        this.calcVD = this.calcVD.bind(this);
      }
    
    calcVD(vdInfo) {
        //this function is called in handleSubmit() in Form.js. it will utilize the form data to perform the VD calc and then report all of the form data plus the VD calc result in an object to the array voltageDropItemsArray
        console.log(vdInfo)
    }

    render() { 
        return(
        <div className="background">
            <Header headerName="Voltage Drop Calculator"/>
            <Form listOfWireSizes={this.state.listOfWireSizes} calcVD={this.calcVD}/>
            <List voltageDropItemsArray={this.state.voltageDropItemsArray}/>
        </div>
        );
    }
}
 
export default App;
