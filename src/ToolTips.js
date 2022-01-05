import React from 'react';

class ToolTips extends React.Component {
    render() { 
        return( 
        <div className='hidden'>
            <p>I shouldnt be able to see this.</p>
        </div>
        );
    }
}
 
export default ToolTips;