import { Link } from "react-router-dom"
import LikeButton from "../components/LikeButton"
import CommentBox from "../components/CommentBOX"
import Card from 'react-bootstrap/Card';

const PostCard = ({ post, index }) => {

    const getToken = () => {
        return localStorage.getItem('authToken')
    }

    return (
        <div>
            <Card style={{ width: '40rem' }}>

                <Link to={`/post-details/${post._id}`} key={post._id}>

                    <Card.Img variant="top" src={post.image} />

                    <Card.Body ml="3">
                        <Card.Title >

                            <br></br>
                            <p>{post.owner.username} {post.caption}</p>
                        </Card.Title>
                    </Card.Body>
                </Link>
                <h5>   {post.likes.length} Likes  </h5>

                <Card.Text>
                </Card.Text>
                <Card.Img />
            </Card>
            <br></br>
        </div>
    )
}

export default PostCard