import React, {Component} from 'react';

export default class InputField extends Component {

    render() {
        return (
            <div>
            <label> {this.props.label} </label>
            {/* <div className='main-input-field'> */}
            <input maxLength={this.props.maxlength} type={this.props.type} name={this.props.name} className='user-details'
                           inputMode={this.props.inputMode}
                           placeholder={this.props.placeholder} 
                           onChange={this._onChange}
                        //    onBlur={this._onBlur}
                        //    onKeyUp={this._onKeyUp}
                        //    onFocus={this.props.onfocusRemoveError && this._onFocus}
                           value={this.props.value}
                                     />
                                     </div>
                                    //  </div>
        );
    }


}