import React,{Component} from 'react';
import data from '../content/Data';

class Sample extends Component{

 render(){return (
    <div>
        <h3>My Profile</h3>
        
        <ul>
         <li  onClick={()=>this.props.updateInfo(data.personal)}>personal</li>  <br/>
         <li onClick={()=>this.props.updateProfessional(data.professional)}>Professional</li><br/>
         <li onClick={()=>this.props.updateSkill(data.skills)}>skills</li><br/> 
          </ul>
   </div>
)


 }
    
    
}

export default Sample;