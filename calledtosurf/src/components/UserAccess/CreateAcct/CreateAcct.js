import React, { Component } from 'react';

// ***** Components ***** //
import Input from '../../Input/Input';


// ****** Styling ****** //
import '../../Global/Global.css';
import './CreateAcct.css';

class CreateAcct extends Component {
    constructor() {
        super();
        this.state = {
            newUser: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',

            }



        }
        this.createNewUser = this.createNewUser.bind(this);
        
    }
    createNewUser() {
        console.log();
    }

    handleSubmit(){

    }

    render() {
        return (
            <section className="container flex-ctr-col">
                <section className="form-wrapper" >
                    <h2>CREATE ACCOUNT</h2>
                    <form className="flex-lft-col" onSubmit={this.handleSubmit}>
                        <label>FIRST NAME</label>
                        <Input
                            type={"text"}
                            name={"first_name"}
                        />
                        <label>LAST NAME</label>
                        <Input
                            type={"text"}
                            name={"last_name"}
                        />
                        <label>EMAIL</label>
                        <Input
                            type={"email"}
                            name={"email"}
                        />
                        <label>PASSWORD</label>
                        <Input
                            type={"password"}
                            name={"password"}
                        />
                        <input type="submit" value="CREATE" />
                    </form>
                </section>
            </section>
        )
    }
}

export default CreateAcct;