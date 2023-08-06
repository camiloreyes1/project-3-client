import { useState, useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { useNavigate } from "react-router-dom"

import { postRoute } from "../services/authService"


const AddPost = () => {

    const { user } = useContext(AuthContext)

    const[post, setPost] = useState({


        image:"",
        caption:""

    })

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        postRoute('/posts/new-post', post)
            .then((newPost) => {
                console.log("New post", newPost)
                navigate('/all-posts')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleTextChange = (e) => {
        setPost((prev) => ({...prev, [e.target.name]: e.target.value}))
      }

    
  return (
    <div id="add-post">
        <h1>Add Post</h1>

        <form onSubmit={handleSubmit}>

        <label>Image</label>
        <input type="text" name="image"  value={post.image} onChange={handleTextChange}/>

        <label>Caption</label>
        <input type="text" name="caption"  value={post.caption} onChange={handleTextChange} />

        <button type="submit">Add Post</button>

        </form>
    </div>
  )
}

export default AddPost