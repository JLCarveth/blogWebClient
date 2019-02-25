import React, { Component } from 'react';
import './App.css';
import JNavbar from './components/NavBar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
//import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import 'font-awesome/css/font-awesome.min.css';

export default class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
        isLoggedIn : false
        }
    }

    render() {
        return (
            <div className="d-flex" id="wrapper">
                <Sidebar/>
                <div id="page-content-wrapper">
                    <JNavbar/>
                    <Content componentState="1"/>
                </div>
            </div>
        );
    }

    /**
     * Called once the user has authenticated successfully.
     * @param {Object} data the authenticated user's data
     */
    login (data) {

    }
}
