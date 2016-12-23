import React from 'react';

export default class App extends React.Component {

  clicked() {
    alert('clicked!');
  }

  render() {
    return (
      <div>
        <img src="../../assets/MyPromoter.png" onClick={ this.clicked }/>
      </div>
    );
  }
}