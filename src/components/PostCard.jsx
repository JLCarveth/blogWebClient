import React from 'react'
import BlogController from '../controllers/BlogController'
/**
 * A component that displays a single post as a card.
 * It is not meant to display the entire post, but to be displayed
 * when searcing / browsing posts, to lead to the entire article.
 */
export default class PostCard extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            postid: props.postid,
            isMounted: false,
            title: '',
            author: '',
            tagline: '',
            date: '',
            imgURI: ''
        }
    }

    componentDidMount() {
        BlogController.fetchByID(this.state.postid, (error, result) => {
            var res = result.message
            if (error) this.setState({isMounted:false})
            else {
                this.setState({
                    isMounted:true,
                    title: res.title,
                    tagline: res.tagline,
                    author: res.author,
                    date: res.date,
                    imgURI: res.image
                })
            }
        })
    }

    componentWillUnmount() {
        this.setState({isMounted:false})
    }

    render () {
        const mounted = this.state.isMounted
        return (
            <div>
            {mounted &&
                <div className="card dark">
                    <img src={this.state.imgURI} alt="mountains"/>
                    <p className="title">{this.state.title}</p>
                    <p className="sub">By {this.state.author}, {this.state.date}</p>
                    <p>{this.state.tagline}</p>
                </div>
            }
            </div>
        )
    }
}