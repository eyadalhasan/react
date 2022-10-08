import logo from './logo.svg';
import './App.css';

import React from 'react';

import { Component } from 'react';

import { render } from '@testing-library/react';
class App  extends Component{
  Names=[];
  names=[]
  ages=[];
  age=[];
 searchDup(props){
  let flag=0
  props.details.map((item,idx)=>{
    for(let i in this.names){
      if(this.names[i]== item.name||this.age[i]+""==item.age+""){
        flag=1
      }
    }
    if(!flag)
   {
      flag=0;
      this.Names.push(<li key={idx}>{item.name}</li>);
      this.names.push(item.name);
      this.age.push(item.age);
      this.ages.push(<li key={idx}>{item.age}</li>);
    }

      flag=0;

       });
}

  constructor(props){
    super()
    this.state={
      Names:this.Names,
      ages:this.ages
    }
    this.searchDup(props)

}
deleteMember(){
this.Names.pop();
this.ages.pop();
this.setState({Names:this.Names,ages:this.ages});
}

render()
{
  return (
    <div >
    <ul style={{display:'inline-block'}}>
    {this.state.Names}
    </ul>
    <ul style={{display:'inline-block'}}>
    {this.state.ages}
    </ul>
    <button onClick={this.deleteMember.bind(this)} style={{display:'block'}}>Delete</button>
    </div>
  )
}
}
export default App;