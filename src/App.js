import logo from './logo.svg';
import './App.css';

import React from 'react';

import { Component } from 'react';

import { render } from '@testing-library/react';
class App  extends Component{
  Names=[];
  ages=[];
  constructor(props){
    super()
    this.state={
      Names:this.Names,
      ages:this.ages
    }
    props.details.map((item,idx)=>{
      this.Names.push(<li key={idx}>{item.name+""}</li>);
      console.log(item.name)
      this.ages.push(<li key={11+idx}>{item.age+""}</li>);
       });
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

