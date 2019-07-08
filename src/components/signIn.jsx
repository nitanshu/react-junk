import React, { Component } from 'react';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile_no: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        alert('Sign In Successfully.');
        event.preventDefault();
    }
    render() {
        return (
            <form class="form-group col-6" onSubmit={this.handleSubmit}>
                <h4 align="center">Sign In</h4>
                <input type="text" class="form-control" name="mobile_no" onChange={this.handleChange} placeholder="Mobile Number" /><br />
                <input type="password" class="form-control" name="password" onChange={this.handleChange} placeholder="Password" /><br />
                <input type="submit" class="btn btn-primary" value="Sign In" />
            </form>
        );
    }
}

export default SignIn;