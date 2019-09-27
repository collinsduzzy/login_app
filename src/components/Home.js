import React from 'react';
// eslint-disable-next-line
import Materialize from '../css/materialize.css'

const Home = () => {
    return (
        <div className="app">
            <div className="banner center">
                <h2>Welcome to Glamour Girls</h2>
                <br />
                <button className="btn-large center red darken-4">Sign In</button>
                <br />  <br />
                <p>New to Glamgirls? <span>Create an account.</span></p>
            </div>
        </div>
    )
}

export default Home