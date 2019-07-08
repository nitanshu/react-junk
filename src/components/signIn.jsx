import React, { Component } from 'react';
class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            mobile_no: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState ({
            [name]: value
        })
    }

    handleSubmit(event){
        alert('Sign In Successfully.');
        event.preventDefault();
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label /> Mobile No:
                <input type="text" name="mobile_no" onChange={this.handleChange} /><br />
                <label /> Password
                <input type="password" name="password" onChange={this.handleChange} /><br />
                <input type="submit" value="Sign In" />
            </form>
         );
    }
}
 
export default SignIn;