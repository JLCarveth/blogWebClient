import React from 'react'
import WarningBanner from './WarningBanner'
import Button from 'react-bootstrap/Button'

/**
 * The component that allows a user to login and recieve a token
 */
export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            failed: this.props.failed,
            error: this.props.error
        }

        // Need to lift this method up from LoginForm's state to its parent
        this.handleSubmit = this.handleSubmit.bind(this)
        // *Might* need to lift these as well, not sure without testing 
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
    }

    /**
     * Handles login logic upon form submission
     * @param {*} event 
     */
    handleSubmit (event) {
        event.preventDefault()
        this.props.handleSubmit(event)
    }
    
    handleChangeEmail (event) {
        this.setState({email:event.target.value})
    }

    handleChangePassword (event) {
        this.setState({password:event.target.value})
    }

    render () {
        return(
            <form onSubmit={this.handleSubmit} className="form-signin">
                <WarningBanner warn={this.state.failed} message={this.state.error.message}/>
                <h1 className="h3 mb-3 font-weight-normal">Login</h1> 
                <label className="sr-only input" htmlFor="iEmail">Email:</label>
                <input type="email" id="iEmail"className="form-control" value={this.state.email} onChange={this.handleChangeEmail} name="email" placeholder="john@me.com"/>
                <label className="sr-only input" htmlFor="iPass">Password:</label>
                <input type="password" id="iPass" className="form-control" value={this.state.password} onChange={this.handleChangePassword} name="password" placeholder="Password"/>
                <div className="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <Button type="submit" className="btn btn-lg btn-block accent">Login</Button>
                <p className="mt-5 mb-3 text-muted">&copy; John L. Carveth</p>
            </form>
        )
    }

}