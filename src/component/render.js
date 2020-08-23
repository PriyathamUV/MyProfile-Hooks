import React, { Component } from 'react';


class Renderdisplay extends Component {
    
    render() { 
    return ( 
    <div className='render'> 
        <h2>Personal Info</h2>
      Name:<h4>{this.props.info.name}</h4><br/>
     Address:<h4>{this.props.info.address}</h4><br/>
     Email:<h4>{this.props.info.mail}</h4><br/>
     Content:<p className="lead mb-5">{this.props.info.content}</p>
     </div> );
    
    }
}
 
export default Renderdisplay;