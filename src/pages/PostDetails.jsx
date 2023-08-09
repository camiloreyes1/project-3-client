import { useEffect, useState, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PostContext } from "../context/posts.context"
import { get, postRoute } from "../services/authService"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import Button from 'react-bootstrap/Button';
import  Card from "react-bootstrap/Card";



const PostDetails = () => {

    const [thisPost, setThisPost] = useState(null)
    const { postId } = useParams()
    const { posts, setPosts } = useContext(PostContext) 
    const navigate = useNavigate() 

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

        <Card style={{ width: '45rem' }}>

        <Card.Img variant="top" />

         {thisPost &&
            <img src={thisPost.image} alt="foundImage" />       
        }

        <Card.Body>

        <Link to={`/edit/${postId}`}>
        <Button>Edit Post</Button>
        </Link>

        <Button variant="danger" onClick={deletePost}>Delete Post</Button>

        </Card.Body>
        </Card>
      </div>

  )
}

export default PostDetails

