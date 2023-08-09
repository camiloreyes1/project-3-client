import { useContext, useEffect, useState } from "react"
import { PostContext } from "../context/posts.context"
import { Link, useParams } from "react-router-dom"
import { get } from "../services/authService"
import { AuthContext } from "../context/auth.context";
import PostCard from "../components/PostCard";

const Profile = () => {

    const { posts } = useContext(PostContext)
    const { userId } = useParams()
    const [thisUser, setThisUser] = useState(null)
    const [thesePosts, setThesePosts] = useState([])
    const { user } = useContext(AuthContext)





    useEffect(() => {
        if (user) {
            get(`/posts/profile/${user._id}`)
                .then((response) => {
                    console.log("Found user ===>", response.data)
                    setThesePosts(response.data.foundPosts)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

    }, [user])

    return (
        <div>
            <h1>Your Posts</h1>
            {
                thesePosts.map((post, i) => {
                    return (

                            <PostCard key={i} post={post} index={i} /> 
                        
                    )
                })

            }
        </div>
    )
}

export default Profile


{/* <Link to={`/post-details/${post._id}`} key={post._id}/> */}
