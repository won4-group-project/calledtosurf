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
                            onChange={this.createNewUser}
                        />
                        <label>LAST NAME</label>
                        <Input
                            type={"text"}
                            name={"last_name"}
                            onChange={this.createNewUser}
                        />
                        <label>EMAIL</label>
                        <Input
                            type={"email"}
                            name={"email"}
                            onChange={this.createNewUser}
                        />
                        <label>PASSWORD</label>
                        <Input
                            type={"password"}
                            name={"password"}
                            onChange={this.createNewUser}
                        />
                        <input type="submit" value="CREATE" />
                    </form>
                </section>
            </section>
        )
    }
}

export default CreateAcct;