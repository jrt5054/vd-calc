import React from 'react';

class ToolTips extends React.Component {
    render() { 
        return( 
        <div className='hidden' id=''>
            I shouldnt be able to see this.
        </div>
        );
    }
}
 
export default ToolTips;

// hover over form input
// triggers handleMouseOver function
// sends ID to <ToolTips/>
// tooltips finds div with same id and changes class to 'show'
// also adds attributes directly to div 