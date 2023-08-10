import { useContext, useEffect } from "react"
import { PostContext } from "../context/posts.context"
import SecondPostCard from "../components/SecondPostCard"

const AllPosts = () => {

    const { posts, getPosts } = useContext(PostContext)

    useEffect(() => {

        getPosts()

    }, [])


    return (
        <div id="all-posts" class="d-flex flex-row flex-wrap mb-3">
            {
                posts.map((post, index) => {
                    return (
                        <   SecondPostCard key={post._id} post={post} index={index} />
                    )
                    
                }).reverse()
            }
        </div>
    )
}

export default AllPosts
