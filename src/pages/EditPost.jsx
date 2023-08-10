import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../context/auth.context"
import { useNavigate, useParams } from "react-router-dom"
import { PostContext } from "../context/posts.context"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { postRoute } from "../services/authService"
import { FormControl } from "react-bootstrap"

const EditPost = () => {

    const { user } = useContext(AuthContext)

    const { posts } = useContext(PostContext)

    const { postId } = useParams()

    const [updatedCaption, setUpdatedCaption] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        postRoute(`/posts/edit/${postId}`, { caption: updatedCaption })
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
        if (posts.length) {
            const post = posts.find((post) => post._id === postId)
            console.log("Post =====>", post.caption, post, posts)
            setUpdatedCaption(post.caption)
        }
    }, [postId, posts])

    return (
        <div class="m-3" id="edit-post">

            <h1>Edit Post</h1>

            <form onSubmit={handleSubmit}>

            <Form.Group as={Col} md="3" controlId="validationCustom02">
                <Form.Label>Caption</Form.Label>
                <FormControl
                    onSubmit={handleSubmit}
                    type="text"
                    name="caption"
                    value={updatedCaption}
                    onChange={handleTextChange}
                />
                <br></br>

                <Button type="submit">Edit Post</Button>
            </Form.Group>

            </form>
            <br></br>
        </div>
    )
}

export default EditPost


{/* <Form.Group as={Col} md="3" controlId="validationCustom02">
<Form.Label>Password</Form.Label>
<Form.Control
  onSubmit={handleLoginSubmit}
  type="password"
  name="password"
  value={password}
  onChange={handlePassword}
/>
</Form.Group> */}