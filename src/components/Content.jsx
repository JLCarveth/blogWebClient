import React from 'react'


import PostFeed from './PostFeed'
import PostCard from './PostCard'
import LoginForm from './LoginForm'

import AuthController from '../controllers/AuthController'
import Validation from '../utils/Validation'

// Enum to track different possible states the component can display
const ComponentStates = {
    POSTFEED: 1,
    SINGLEPOST: 2,
    LOGIN: 3,
    REGISTER: 4,
    ABOUT: 5,
    CONTACT: 6
}

export default class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMounted:false
        }
    }

    componentDidCatch () {
        this.setState({isMounted:false})
    }

    componentDidMount() {
        this.setState({isMounted:true})
    }

    render () {
        return (
            <div className="container">
                {{
                    1: <PostFeed/>,
                    2: <PostCard postid={this.props.singlePostID}/>,
                    3: <LoginForm handleSubmit={this.handleLoginSubmit}/>,
                    4: <h1>REGISTER</h1>,
                }[this.props.componentState]}
            </div>
        )
    }

    handleLoginSubmit (event) {
        event.preventDefault()
        this.setState({
            email:event.target.email.value,
            password:event.target.password.value
        })
        const email = event.target.email.value
        const password = event.target.password.value

        if (!Validation.isEmail(email)) {
            this.setState({failed: true, error: {message: 'Invalid email.'}})
            return
        }

        if (password.length < 6) {
            this.setState({failed:true, error: {message: 'Password too short.'}})
            return
        }
        AuthController.authenticateCredentials(email, password, (error, result) => {
            if (error) this.setState({failed:true, error: {message:error.message}})
            else {
                if (result.success) { // If auth succeeded
                    this.setState({failed:false})
                } else {
                    this.setState({failed:true, error: {message:result.message}})
                }
            }
        })
    }

    handleRegisterSubmit (event) {
        event.preventDefault()
        this.setState({
            username:   event.target.username.value,
            email:      event.target.email.value,
            password:   
        })
    }
}