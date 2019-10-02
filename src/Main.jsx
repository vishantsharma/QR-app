import React, {Component} from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
const superagent = require('superagent');
import logo from './logo.svg';
import './App.css';
import InputField from './InputField'
import SelectFormField from './SelectFormField'

export default class ReceiveMoney extends Component {
    constructor(){
        super()
        this.state={
          result:''
        }
      }
    
      componentWillMount(){
        const url='https://api.eu-gb.apiconnect.appdomain.cloud/bsc-7-px-lb-2019/sb/bankingapis/customer/bank/1/15';
        superagent
        .get(url)
        .query(null)
        .set('Accept', 'application/json')
        .end ((error, response)=>{
            const title=response.body
            console.log(JSON.stringify(title));
            
            this.setState({
              result:title
            })
        })
        
    }

    render() {
        return (
            <div className="App">
            <header className="App-header">
              <h1>
                We the QR-ious
              </h1>
             
              <SelectFormField/>
              {this.state.result.customerName && <div className='customer-name'> {`Name:-   ${this.state.result.customerName}`} </div>}
              <br/>
              {this.state.result.customerName && <div className='customer-balance'> {`Balance:-   ${this.state.result.accounts[1].balance}`} </div>}
              
            </header>
    
          </div>
        );
    }


}