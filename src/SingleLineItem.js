import React from 'react';

class SingleLineItem extends React.Component {
    render() { 
        return (
        <li key={this.props.vdItemArray.id}>
            {this.props.vdItemArray.wireTag}
        </li>)
        ;
    }
}
 
export default SingleLineItem;

