import React from 'react'
import LoginControl from './LoginControl'

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.setState({
            isMounted:false
        })
    }

    componentDidMount () {
        this.setState({isMounted:true})
    }

    componentDidCatch () {
        this.setState({isMounted:false})
    }

    render () {
        return (
            <div className="bg-light border-right" id="sidebar-wrapper">
              <LoginControl isLoggedIn={this.props.isLoggedIn}/>
              <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">Shortcuts</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">Overview</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">Events</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">Profile</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">Status</a>
              </div>
            </div>
        )
    }
}