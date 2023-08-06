import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { PostContext } from "../context/posts.context"
import { get } from "../services/authService"

const PostDetails = () => {

    const [thisPost, setThisPost] = useState(null)

    const { postId } = useParams()

    const { posts } = useContext(PostContext)


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
        
        
        
        </div>
  )
}

export default PostDetails