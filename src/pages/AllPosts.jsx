import { useContext, useEffect } from "react"
import { PostContext } from "../context/posts.context"
import SecondPostCard from "../components/SecondPostCard"

const AllPosts = () => {

    const { posts, getPosts } = useContext(PostContext)

    useEffect(() => {

        getPosts()

    }, [])


    return (
        <div id="all-posts">

            <h1>Feed</h1>
            {
                posts.map((post, index) => {
                    return (
                        <   SecondPostCard key={post._id} post={post} index={index} />
                    )
                })
            }
        </div>
    )
}

export default AllPosts
