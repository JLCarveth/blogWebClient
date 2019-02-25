import React from 'react'

/**
 * Dependencies
 */
import BlogController from '../controllers/BlogController'
import PostCard from '../components/PostCard'

export default class PostFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            fetched: false,
            isMounted: false
        }
    }

    componentDidMount() {
        this.setState({isMounted:true})
        BlogController.fetchRecent((error, result) => {
            if (error) this.setState({fetched:false})
            else {
                console.log(result)
                this.setState({posts:result.message})
            }
        })
    }

    componentWillUnmount() {
        console.log('Unmounted')
        this.setState({isMounted:false})
    }


    render () {
        const posts = this.state.posts
        const isMounted = this.setState.isMounted
        return (
            <ul>
                {!isMounted && posts.map(i => {
                    console.log('i' + JSON.stringify(i))
                    return <li key={i._id}><PostCard postid={i._id}/></li>
                })}
            </ul>
        )
    }
}