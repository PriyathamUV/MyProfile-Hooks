import React, { Component } from 'react';


class Professional extends Component {
    
    render() { 
    return ( 
    <div className="render">
        Role:<h4>{this.props.professional.role}<br/></h4>
         Years of Experience:<h4>{this.props.professional.exp}<br/></h4>
     
     </div> );
    
    }
}
 
export default Professional;