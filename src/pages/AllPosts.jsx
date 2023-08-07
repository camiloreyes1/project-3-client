import { useContext, useEffect } from "react"
import { PostContext } from "../context/posts.context"
import { Link } from "react-router-dom"
import LikeButton from "../components/LikeButton"
import EditPost from "./EditPost"
import CommentBox from "../components/CommentBOX"
import Card from 'react-bootstrap/Card';





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
            posts.map((post, index) => {
                return (
                    <div key={post._id}>
                    <Card>
                    <Link to={`/post-details/${post._id}`} key={post._id}>
                        <img id="preview" src={post.image} alt="post"/>
                    <p>{post.owner.username}: {post.caption}</p>
                    </Link>

                    <p>Liked: {post.likes.length} number of times</p>

                    {getToken() && (
                        <LikeButton  postId={post._id} post={post} index={index}/>
                    )} 

                    {getToken() && (
                        <CommentBox />
                    )} 
                    </Card>
                    </div>
                ) 
             })
        }     
    </div>
  )
}

export default AllPosts



// <Card>
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>