
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Input from '../../Input/Input.js';

import './Login.css';
import '../../Global/Global.css';
import Axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
                email: '',
                password: '',
                storedUserData: [],
                redirect: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // I need to check the id against the db.  Once state has been set I need to do an axios call to varify the email.
    
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        }, () =>
                console.log(value)
        );
    }

    handleSubmit() {
        let {email, password} = this.state;
        
        Axios.get('/api/login/').then( res =>{
            
            this.setState({
                storedUserData: res.data
            });
            let { storedUserData } = this.state;

            for(let i = 0; i < storedUserData.length; i++){
                let storedPassword = storedUserData[i].user_password;
                let storedEmail= storedUserData[i].email;
                if(email !== storedEmail && password !== storedPassword){
                   console.log(i + 1);
                } else if(email === storedEmail && password === storedPassword) {
                   this.setState({redirect: true});
                } else {
                    return alert("Wrong username or password");
                }
            }
        });
    }

    renderRedirect() {
        if(this.state.redirect) {
            return <Redirect to="/" />
        }
    }


    render() {

        return (
            <section className="container flex-ctr-col">
                <section className="form-wrapper">
                    <h2>Login</h2>
                    <form className="aln-cont-bl" onSubmit={this.handleSubmit} >
                        <label>EMAIL</label>
                        <Input className={""}
                            inputType={"email"}
                            name={"email"}
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <label>PASSWORD</label>
                        <Input inputType="text"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <input type="submit" value="SIGN IN" />
                        {/* Convert this into a react Link */}
                        <a href="#" >Create account</a>
                    </form>
                    {this.renderRedirect()}
                </section>
            </section>
        );
    }
}

export default Login;