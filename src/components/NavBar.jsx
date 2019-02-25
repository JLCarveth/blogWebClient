import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FontAwesomeIcon from 'react-fontawesome'

export default class JNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: ''
        }

        this.handleSearch = this.handleSearch.bind(this)
        this.handleSearchChange = this.handleSearchChange.bind(this)
    }

    render () {
        return (
            <Navbar className="navbar-dark accent" bg="dark" expand="lg">
                <Navbar.Brand>John Carveth</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{borderColor:'#FFF'}}className="accent"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Form onSubmit={e=> e.preventDefault()} className="ml-auto">
                    <InputGroup className="mb-3 search">
                            <FormControl inline="true" value={this.state.searchQuery} onChange={this.handleSearchChange} type="text" placeholder="Search" />
                            <InputGroup.Append>
                                <Button className="accent" variant="primary" type="submit" onClick={this.handleSearch}>
                                    <FontAwesomeIcon name="search"/>
                                </Button>
                            </InputGroup.Append>
                    </InputGroup>
                </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }

    componentDidMount() {
        console.log('Component mounted successfully.')
    }

    handleSearch(event) {
        event.preventDefault()
        console.log(this.state.searchQuery)
    }

    handleSearchChange(event) {
        this.setState({searchQuery:event.target.value})
    }
}