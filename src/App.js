import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import QRCode from 'qrcode.react'
import InputField from './InputField'


export default class App extends React.Component {

  onClickButton = (event) => {
          if(event.target.id === 'qrButton') {
          alert('button clicked')
          // <QRCode value="http://facebook.github.io/react/" /> 

          }

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            We the QR-ious
          </h1>
          <InputField label='Sort Code' maxLength='6' type='numeric' value='123456' />
          <InputField label='Account Number' type='numeric' value='0123456789'/>
          <InputField label='Amount' type='numeric' value='100.55'/>
          <InputField label='Name' type='text' value='Vishant'/>

           <input id='qrButton' type='button' value='Generate QR Code' className="App-link" onClick={this.onClickButton} />
          
        </header>

      </div>
    );
  }
   
  }
  

