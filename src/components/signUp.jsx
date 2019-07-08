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
             <form class="form-group col-md-4 col-md-offset-6" onSubmit={this.handleSubmit}>
                <h4 align="center">Sign Up</h4>            
                <input type="text" name="name" onChange={this.handleChange} class="form-control" placeholder="Name"/><br />                
                <input type="text" name="mobile_no" onChange={this.handleChange} class="form-control" placeholder="Mobile Number"/><br />            
                <input type="email" name="email" onChange={this.handleChange} class="form-control" placeholder="Email"/><br />        
                <input type="password" name="password" onChange={this.handleChange} class="form-control" placeholder="Password"/><br />
                <input type="text" class="form-control" placeholder="City" /><br />
                <input type="text" class="form-control" placeholder="State" /><br />
                <input type="text" class="form-control" placeholder="Zip" /><br />
                <input type="submit" class="btn btn-primary" value="Sign Up" />
             </form>
             );
    }
}
 
export default SignUp;