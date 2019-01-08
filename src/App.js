import PropTypes from 'prop-types';
import React, { Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class ContactCard extends Component{
  render() {
    return (
      <div className="ContactCard">
            <h1 className="title">Contact Card</h1>
            <ul>
                <li>{this.props.contactName}</li>
                <li>{this.props.mobileNumber}</li>
                <li>{this.props.phoneNumber}</li>
                <li>{this.props.email}</li>
            </ul>
      </div>
    );
  }
}

class App extends Component {
    render() {
       
        
        return (
            <div>
                <ContactCard contactName=" Sara" mobileNumber=" 923-293-0932" phoneNumber = " 127-672-9732" email=" abc@gmail.com"/>
                <ContactCard contactName=" Miles" mobileNumber=" 353-433-0932" phoneNumber = " 679-672-9732" email=" xyc@gmail.com"/>
                <ContactCard contactName=" Stevens" mobileNumber=" 333-125-1937"  email=" igd@gmail.com"/>
            
            </div>
        );
    }               
}

ContactCard.propTypes = {
    contactName: PropTypes.string.isRequired,
    mobileNumber: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
    email: PropTypes.string.isRequired
};

export default App;
