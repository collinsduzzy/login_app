import React, {Component} from 'react';

class Form extends Component {
    render () {
        return (
            <div className="app container banner">
                <div className="row">
                    <div className="right col s5">
                        <h5>Enter your details</h5>
                        <form>
                            <input id="username" type="text" className="validate"/>
                            <label htmlFor="username">Username</label>                            
                            <br/>
                            <input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                            <br/>
                            <br/>
                            <button className="btn-large red right darken-4">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form