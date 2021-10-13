import './App.css';
import React from 'react';
import Robots from '../data/robots';

import RobotCard from '../components/robotCard'

class App extends React.Component {

  render() {
    console.log(Robots)
    const robots = Robots.map(Res => <RobotCard robot={Res}/>)
    return (
      <div className="container">
        <h1 className="text-center text-primary">Profil Finder with react</h1>
        <div className="container">
          {robots}
        </div>
      </div>
    );
    }
}

export default App;
