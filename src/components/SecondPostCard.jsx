import { Link } from "react-router-dom"
import LikeButton from "../components/LikeButton"
import CommentBox from "../components/CommentBOX"
import Card from 'react-bootstrap/Card';

const SecondPostCard = ({ post, index }) => {

    const getToken = () => {
        return localStorage.getItem('authToken')
    }

    return (
        <div>
            <Card style={{ width: '40rem' }}>

                <Card.Img variant="top" src={post.image} />

                <Card.Title >
                    <br></br>
                    <p>{post.owner.username}: {post.caption}</p>
                </Card.Title>
                
                <Card.Body>

                    <h5>    {post.likes.length} Likes   </h5>
                    {getToken() && (
                        <LikeButton postId={post._id} post={post} index={index} />
                    )}
                   
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