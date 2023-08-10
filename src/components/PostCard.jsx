import { Link } from "react-router-dom"
import LikeButton from "../components/LikeButton"
import CommentBox from "../components/CommentBox"
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";

const PostCard = ({ post, index }) => {

    const getToken = () => {
        return localStorage.getItem('authToken')
    }

    return (
        <div>
            <Container fluid>
            <Card style={{ width: '22.3rem' }}>

                <Link to={`/post-details/${post._id}`} key={post._id}>

                    <Card.Img variant="top" src={post.image} fluid/>

                    <Card.Body ml="3">
                        <Card.Title >

                            <br></br>

                            <div >

                            <p>{post.owner.username} {post.caption}</p>

                            </div>
                        </Card.Title>
                    </Card.Body>
                </Link>
                <h5>  &nbsp;&nbsp; {post.likes.length} Likes  </h5>
                <Card.Text>
                </Card.Text>
                <Card.Img />
            </Card>
            </Container>
            <br></br>
        </div>
    )
}

export default PostCard