import React from 'react';
import Magnify from './magnify/Magnify';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div style={{
        width:'500px',
        margin:'auto'
      }}>
        <h1>It Works with react-magnify</h1>
        <br/>
        <br/>
        <br/>
        <Magnify style={{
          width:'200px'
        }} src="http://thecodeplayer.com/uploads/media/iphone.jpg"></Magnify>
      </div>
    )
  }
}
