import React from 'react'
import Button from 'react-bootstrap/Button'

export default class LoginControl extends React.Component {
    constructor (props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        this.props.handleClick(e.target.value)
    }

    render () {
        const isLoggedIn = this.props.isLoggedIn
        return (
            <div>
            {isLoggedIn ? // If they are not logged in
                <div className="sidebar-heading">
                    <h3>Welcome, Guest!</h3>
                    <Button className="accent" onChange={this.handleChange}>Login</Button>
                    <Button className="alternate" onChange={this.handleChange}>Register</Button>
                </div>
            :
                <div className="sidebar-heading">
                    <h3>Welcome, {this.props.loginData.username}</h3>
                </div>
            }
            </div> 
        )
    }
}