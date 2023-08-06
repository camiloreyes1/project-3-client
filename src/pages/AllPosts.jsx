import { useContext, useEffect } from "react"
import { PostContext } from "../context/posts.context"
import { Link } from "react-router-dom"

const AllPosts = () => {
    
    const {posts, getPosts} = useContext(PostContext)

    useEffect(() => {

        getPosts()

    }, [])

    return (
    <div id="all-posts">
        <h1>Feed</h1>
        {
            posts.map((post) => {
                return (
                    <Link to={`/post-details/${post._id}`} key={post._id}>
                        <img id="preview" src={post.image} alt="post"/>
                        <p>{post.owner.username}: {post.caption}</p>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default AllPosts