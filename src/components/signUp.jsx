import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            mobile_no: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        alert('submitted'+ this.state.email);
        event.preventDefault();
    }

    state = {  }
    render() { 
        return (
             <form onSubmit={this.handleSubmit}>
                 <label>Name:</label>
                 <input type="text" name="name" onChange={this.handleChange}/><br />
                 <label>Mobile No:</label>
                 <input type="text" name="mobile_no" onChange={this.handleChange}/><br />
                 <label>Email:</label>
                 <input type="text" name="email" onChange={this.handleChange}/><br />
                 <label>Password:</label>
                 <input type="password" name="password" onChange={this.handleChange}/><br />
                 <input type="submit" value="Sign Up"/>
             </form>
             );
    }
}
 
export default SignUp;