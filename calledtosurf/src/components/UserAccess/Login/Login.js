
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Input from '../../Input/Input.js';

import './Login.css';
import '../../Global/Global.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // const name = event.target.name;
        // const value = event.target.value;
        // this.setState({
        //     [name]: value
        // }, () => {
        //     console.log(value);
        // });
        // this.handleSubmit()
        this.setState({ 
            email: event.target.value
        }, () => { console.log(event)}
        );
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.email);
        event.preventDefault();
      }

    render() {
        return (
            <section className="container flex-ctr-col">
                <section className="login">
                    <div>Login</div>
                    <form className="aln-cont-bl" onSubmit={ this.handleSubmit } >
                        <label>EMAIL</label>
                        {/* <Input
                            className={""}
                            id={"Email Address"}
                            name={"email"}
                            type={"email"}
                            onChange={ this.handleChange }
                        /> */}
                        <input
                            type="email"
                            name="email"
                            onChange={ this.handleChange } />
                        <label>PASSWORD</label>
                        <input type="password" />
                        <input type="submit" value="SIGN IN"  />
                        {/* Convert this into a react Link */}
                        <a href="#" >Create account</a>
                    </form>

                </section>
            </section>
        );
    }
}

export default Login;