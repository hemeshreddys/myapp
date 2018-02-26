import React, { Component } from 'react';
import './App.css';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import Page from './Page';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:[
        {
          id:1,
          name:"“All of life is peaks and valleys. Don’t let the peaks get too high and the valleys too low.”",
          color:"#7C94FF"
        },
        {
          id:2,
          name:"“All life is an experiment. The more experiments you make the better.”",
          color:"#BC6B82"
        },
        {
          id:3,
          name:"“If life were predictable it would cease to be life, and be without flavor.”",
          color:"#94D42E"
        },
        {
          id:4,
          name:"“A man who dares to waste one hour of time has not discovered the value of life.”",
          color:"#44B638"
        },
        {
          id:5,
          name:"“I think being in love with life is a key to eternal youth.”",
          color:"#11A5E0"
        },
        {
          id:6,
          name:"“However difficult life may seem, there is always something you can do and succeed at.”",
          color:"#A30B37"
        },
        {
          id:7,
          name:"“The more you praise and celebrate your life, the more there is in life to celebrate.”",
          color:"#081759"
        },
      ]
    }
  }
  render() {
    return (
      <div className="container">
        <MainHeader/>
          {this.state.data.map((dynamicData,i) =>          
             <Page contentP={dynamicData.name} bgColor={dynamicData.color}/>
          )}
        <MainFooter/>
      </div>
    );
  }
}

export default App;
