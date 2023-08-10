import { useState, useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { useNavigate } from "react-router-dom"
import { fileChange } from "../services/fileChange"
import { postRoute } from "../services/authService"
import Button from 'react-bootstrap/Button';



const AddPost = () => {

    const { user } = useContext(AuthContext)

    const [post, setPost] = useState({


        image: "",
        caption: ""

    })

    const [buttonDisabled, setButtonDisabled] = useState(false)

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
        setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleFileChange = (e) => {

        setButtonDisabled(true)
        fileChange(e)
            .then((response) => {

                setButtonDisabled(false)
                setPost((prev) => ({ ...prev, [e.target.name]: response.data.image }))
            })
            .catch((err) => {
                console.log(err)
                setButtonDisabled(false)

            })

    }


    return (
        <div class="m-3" id="add-post">
            <h1>Add Post</h1>


            <form onSubmit={handleSubmit}>

                <div class="mb-3"> 

                <label>Image</label>
                <input className="img" type="file" name="image" onChange={handleFileChange} />

                </div>


                <label>Caption</label>
                <input type="text" name="caption" value={post.caption} onChange={handleTextChange} />

                <Button type="submit" disabled={buttonDisabled}>Add Post</Button>

            </form>

        </div>
    )
}

export default AddPost

