import React from 'react'

import WarningBanner from './WarningBanner'
import Button from 'react-bootstrap/Button'

export default class RegisterForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            failed: this.props.failed,
            error: this.props.error
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePass = this.handleChangePass.bind(this)
        this.handleChangePassC = this.handleChangePassC.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.handleSubmit(event)
    }

    handleChangeEmail (event) {
        this.props.onEmailChange(event.target.value)
    }

    handleChangeUsername (event) {
        this.props.onUsernameChange(event.target.value)
    }

    handleChangePass (event) {
        this.props.onPasswordChange(event.target.value)
    }

    handleChangePassC (event) {
        this.props.onPasswordCChange(event.target.value)
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit} className="form-signin">
                <WarningBanner warn={this.state.failed} message={this.state.error.message}/>
                <h1 className="h3 mb-3 font-weight-normal">Register</h1> 
                <label className="sr-only input" htmlFor="iUser">Username:</label>
                <input type="email" id="iUser"className="form-control" value={this.props.username} onChange={this.handleChangeUsername} name="username" placeholder="Username"/>
                <label className="sr-only input" htmlFor="iEmail">Email:</label>
                <input type="email" id="iEmail"className="form-control" value={this.props.email} onChange={this.handleChangeEmail} name="email" placeholder="john@me.com"/>
                <label className="sr-only input" htmlFor="iPass">Password:</label>
                <input type="password" id="iPass" className="form-control" value={this.props.password} onChange={this.handleChangePass} name="password" placeholder="Password"/>
                <label className="sr-only input" htmlFor="iPass">Password:</label>
                <input type="password" id="iPass" className="form-control" value={this.props.passC} onChange={this.handleChangePassC} name="passwordC" placeholder="Confirm"/>
                <Button type="submit" className="btn btn-lg btn-block accent">Register</Button>
                <p className="mt-5 mb-3 text-muted">&copy; John L. Carveth</p>
            </form>
        )
    }

}