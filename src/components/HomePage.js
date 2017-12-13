import React, { Component } from 'react';

import DummyStore from '../stores/DummyStore';
import Button from './Button';

const Header = ({ message }) => <p>The Dummy state is {message}</p>;



export default class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.clicked = this.clicked.bind();
    this.state = {
      dummy: DummyStore.getDummy()
    };
  }


  clicked() {
    console.log('clicked...');
  }

  render() {
    {
      const dummy = this.state.dummy;
  
      if (dummy) {
        return (
          <div>
            <Header message='data is present' />
          <p>{dummy}</p>
          <Button 
            label='nothing to see here' 
            handleClick={this.clicked} />
          </div>
        );
      }

      return (
        <div>
           <Header message='data is NOT present' />
        <h3>"No Dummy data...."</h3>
         <Button 
            label='nothing to see here...'
            handleClick={this.clicked} />
        </div>
      ); 
    }
  }
}