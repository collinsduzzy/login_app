import React, {Component} from 'react';

import Materialize from '../css/materialize.css'
class Create extends Component {
    render () {
        return (
            <div className="jenner">
                <form className="create">
                <h5>Create A Glam Account</h5>
                    <div className="row">
                        <div className="col s6">
                            <input id="firstname" type="text"/>
                            <label htmlFor="firstname">First Name</label>
                        </div>
                        <div className="col s6">
                            <input id="lastname" type="text"/>
                            <label htmlFor="lastname">Last Name</label>
                        </div>
                    </div>
                        <div className="row">
                            <div className="col s12">
                                <input id="email" type="email"/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s9">
                                <input id="Username" type="text"/>
                                <label htmlFor="Username">Username</label>
                            </div>
                            <div className="col s3">
                                <input id="age" type="number"/>
                                <label htmlFor="age">Age</label> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6">
                                <input id="password" type="password"/>
                                <label htmlFor="password">Enter Password</label>
                            </div>
                            <div className="col s6">
                                <input id="password2" type="password"/>
                                <label htmlFor="password2">Confirm Password</label>
                            </div>
                        </div>
                    <button className="btn-large red right darken-4">Create</button>
                </form>
            </div>
        )
    }
}

export default Create