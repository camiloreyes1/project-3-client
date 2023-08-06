import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../context/auth.context"
import { useNavigate, useParams } from "react-router-dom"
import { PostContext } from "../context/posts.context"

import { postRoute } from "../services/authService"

const EditPost = () => {

    const { user } = useContext(AuthContext)

    const { posts } = useContext(PostContext)

    const { postId } = useParams()

    // const post = posts?.find((post) => post._id === postId)

    const [updatedCaption, setUpdatedCaption] = useState("")

    // const [post, editPost] = useState({

    //     owner: user?._id,
    //     caption:""

    // })



    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        postRoute(`/posts/edit/${postId}`, {caption: updatedCaption})
            .then((updatedPost) => {
                console.log("Updated post", updatedPost)
                navigate('/all-posts')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleTextChange = (e) => {
        setUpdatedCaption(e.target.value)
      }

    useEffect(() => {
        if(posts.length) {
            const post = posts.find((post) => post._id === postId)
            console.log("Post =====>", post.caption, post, posts)
            setUpdatedCaption(post.caption)
        }
    }, [postId, posts])

  return (
    <div id="edit-post">
        <h1>Edit Post</h1>



        <form onSubmit={handleSubmit}>

        <label>Caption</label>
        <input type="text" name="caption"  value={updatedCaption} onChange={handleTextChange} />

        <button type="submit">Edit Post</button>

        </form>
    </div>
  )
}

export default EditPost