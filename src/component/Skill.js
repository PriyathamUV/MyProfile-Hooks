import React, { Component } from 'react';


class Skill extends Component {
    
    render() { 
    return ( 
    <div className='render'>
       DataBase: <h4>{this.props.skill.database}<br/></h4>
  Backend:<h4>{this.props.skill.backend}<br/></h4>   
     </div> );
    
    }
}
 
export default Skill;