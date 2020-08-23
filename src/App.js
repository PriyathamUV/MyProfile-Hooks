import React,{Component} from 'react';
import Sample from './component/Sample';
import Renderdisplay from './component/render';
import Professional from './component/Professional';
import Skill from './component/Skill';
import './Style/index.css';

class App extends Component {
  
 
  state = {
    info: "",
    skill:"",
    professional:""
  }

  updateInfo= info=>{
    this.setState({info:info,skill:'',professional:''})

  }

  updateSkill= skill=>{
    this.setState({skill:skill,info:'',professional:''})
  }

  updateProfessional= professional=>{
    this.setState({professional:professional,info:'',skill:''})
  }
 
  render(){

    return (
      <div className='container fluid'>
        <div className="row content">
          
          <div className='col-sm-3 sidenav'>
            <Sample updateInfo={this.updateInfo} updateProfessional={this.updateProfessional} updateSkill={this.updateSkill} />
            
             </div>
      
        <div className='col-sm-9'>
          {console.log(this.state.info)}
          {console.log('prof',this.state.professional,"skills",this.state.skill)}
          {/* <Renderdisplay  info={this.state.info}/>
          <Skill skill={this.state.skill}/>
          <Professional professional={this.state.professional}/> */}
          { (this.state.info !=='') && (this.state.professional ==='') && (this.state.skill ==='') ? 
          <Renderdisplay  info={this.state.info}/> : null }
          { (this.state.info === '') && (this.state.professional ==='') && (this.state.skill !== '') ? 
          <Skill skill={this.state.skill}/> : null }
          { (this.state.info ==='') && (this.state.professional !=='  ') && (this.state.skill ==='') ? 
          <Professional professional={this.state.professional}/> : null }
{/*             
          else if(((this.state.info)==='') &&((this.state.professional)==='')&&((this.state.skill)!==''))
  {<Skill skill={this.state.skill}/>}
  else if(((this.state.info)==='') &&((this.state.professional)!=='')&&((this.state.skill)===''))
  {
    <Professional professional={this.state.professional}/>
  } */}
  
        </div>
          </div>
        </div>
    );
    
  }
   
  
  
  
}

export default App;
