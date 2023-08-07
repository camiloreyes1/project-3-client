import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { PostContext } from "../context/posts.context"
import { get, postRoute } from "../services/authService"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context"


const PostDetails = () => {

    const [thisPost, setThisPost] = useState(null)
    const { postId } = useParams()
    const { posts, setPosts } = useContext(PostContext)   

    // const isOwner = () => {
    //     return user._id === thisPost.owner._id
    // } 


    const deletePost = () => {

        console.log("postId", postId)
        postRoute(`/posts/delete-post/${postId}`, thisPost)
            .then((response) => {
                let newPosts = posts.filter(thisPost => thisPost._id !== response.data._id)
                setPosts(newPosts)
                navigate('/all-posts')
            })
            .catch((err) => {
                console.log(err)
            })
    }

     
    useEffect(() => {
        
        if (posts.length) {
            let foundPost = posts.find((post) => post._id === postId)
            console.log("Found post ====>", foundPost)
            setThisPost(foundPost)
        } else {
            get(`/posts/post-details/${postId}`)
            .then((response) => {
                console.log("Found from API ====>", response.data)
                setThisPost(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }

    }, [])

  
  return (
    <div>

        <h1>Post Details</h1>

         {thisPost &&
            <img src={thisPost.image} alt="foundImage" />       
        }

         <br></br>

        <Link to={`/edit/${postId}`}>
        <button>Edit Post</button>
        </Link>

        <button onClick={deletePost}>Delete Post</button>
    

      </div>

    
  )
}


export default PostDetails

// /edit/:postId