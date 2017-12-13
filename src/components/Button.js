import React, { Component } from 'react';

var buttonStyle = {
  margin: '10px 10px 10px 0'
};

export default class Button extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  render() {
    return (
      <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}>{this.props.label}</button>
    );
  }
}

