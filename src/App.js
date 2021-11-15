import React from 'react';
import './CSS/App.css'
import Header from './Header';
import Form from './Form';
import List from './List';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          wireSizes: [
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
          voltageDropItemsArray: []
        };
        this.calcVD = this.calcVD.bind(this);
      }
    
    calcVD() {
        //this is the actual voltage drop calc
    }

    render() { 
        return(
        <div className="background">
            <Header headerName="Voltage Drop Calculator"/>
            <Form wireSizes={this.state.wireSizes} calcVD={this.calcVD}/>
            <List />
        </div>
        );
    }
}
 
export default App;
