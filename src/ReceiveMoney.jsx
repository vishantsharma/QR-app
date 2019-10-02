import React, {Component} from 'react';
import InputField from './InputField'


export default class ReceiveMoney extends Component {

    render() {
        return (
            <div>
            <label> {this.props.label} </label>
            {/* <div className='main-input-field'> */}
            {alert('Dialog opened')}
            <InputField label='Amount' type='numeric' value='100.55'/>
                                     </div>
                                    //  </div>
        );
    }


}