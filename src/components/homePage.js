import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {

  clicked() {
    console.log('clicked!');
  }

  render() {
    return (
      <div>
        <p>myPromoter</p>
        <Link to="loginOrRegister"><img src="../../assets/MyPromoter.png" onClick={ this.clicked }/></Link>
        {this.props.children}
      </div>
    );
  }
}