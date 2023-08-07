import { useContext, useEffect } from "react"
import { PostContext } from "../context/posts.context"
import { Link } from "react-router-dom"
import LikeButton from "../components/LikeButton"
import EditPost from "./EditPost"
import CommentBox from "../components/CommentBOX"




const AllPosts = () => {
    
    const {posts, getPosts} = useContext(PostContext)

    useEffect(() => {

        getPosts()

    }, [])

    const getToken = () => {
        return localStorage.getItem('authToken')
      }

    return (
    <div id="all-posts">
        <h1>Feed</h1>
        {
            posts.map((post) => {
                return (
                    <div>
                        
                    <Link to={`/post-details/${post._id}`} key={post._id}>
                        <img id="preview" src={post.image} alt="post"/>
                    <p>{post.owner.username}: {post.caption}</p>
                    </Link>

                    {getToken() && (
                        <LikeButton  postId={post._id}/>
                    )} 

                    {getToken() && (
                        <CommentBox />
                    )} 
                    </div>
                ) 
             })
        }     

    </div>
  )
}

export default AllPosts

