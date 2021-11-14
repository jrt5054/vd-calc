import React from 'react';
import './CSS/App.css'
import Header from './Header';
import Form from './Form';

class App extends React.Component {

    
    render() { 
        return(
        <div className="background">
            <Header headerName="Voltage Drop Calculator"/>
            <Form />
            {/* List */}
        </div>
        );
    }
}
 
export default App;
