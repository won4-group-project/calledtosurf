
import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Input from '../../Input/Input.js';

import './Login.css';
import '../../Global/Global.css';
import axios from 'axios';

class Login extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //             email: '',
    //             password: '',
    //             storedUserData: [],
    //             redirect: false
    //     };
    //     // this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // I need to check the id against the db.  Once state has been set I need to do an axios call to varify the email.





    render() {
        const apiUrl =
          process.env.REACT_APP_LOGIN === "production"
            ? process.env.REACT_APP_PROD_API_URL
            : process.env.REACT_APP_DEV_API_URL;

        return (
            <section className="container flex-ctr-col">
                <section className="form-wrapper">
                    <Link href={apiUrl} >Login</Link>
                </section>
            </section>
        );
    }
}

export default Login;