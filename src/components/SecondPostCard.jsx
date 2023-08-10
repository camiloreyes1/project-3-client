import { Link } from "react-router-dom"
import LikeButton from "../components/LikeButton"
import CommentBox from "../components/CommentBox"
import Card from 'react-bootstrap/Card';

const SecondPostCard = ({ post, index }) => {

    return (
        <div class="m-3">

            <Card style={{ width: '22.3rem' }}>

                <Card.Img variant="top" src={post.image} fluid />

                <Card.Title>
                    <br></br>
                    <p>&nbsp;&nbsp;&nbsp;{post.owner.username}:&nbsp; {post.caption}</p>
                </Card.Title>

                <Card.Body>

                    <h6> {post.likes.length} Likes </h6>

                <div class="mb-2">
                    <LikeButton postId={post._id} post={post} index={index} />
                </div>
                    <CommentBox post={post} index={index} />
                </Card.Body>
                <Card.Text>
                </Card.Text>
                <Card.Img />
            </Card>
            <br></br>
        </div>
    )
}
export default SecondPostCard