import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useContext } from 'react';
import { postRoute } from '../services/authService';
import { PostContext } from '../context/posts.context';
import Collapse from 'react-bootstrap/Collapse';




const CommentBox = ({ author, post, index}) => {

  const [open, setOpen] = useState(false);

  const { posts, setPosts } = useContext(PostContext)

  const [comment, setComment] = useState("")
  
  
  const handleChange = (e) => {
    console.log("Comment ===>", comment)
    setComment(e.target.value)
  }
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
      postRoute(`/posts/add-comment/${post._id}`, {comment})
      .then((response) => {
        console.log("Comment", response.data)
        let newPosts = [...posts]
        newPosts.splice(index, 1, response.data)
        console.log("NewPosts", newPosts)
        setPosts(newPosts)
        setComment('')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  
  return (

    <div id="comment">
      <Form onSubmit={handleSubmit}>

       <Form.Label  >Comment</Form.Label>
          <Form.Control 
            type="text"
            name="comment"
            value={comment}
            onChange={handleChange}
          >
          </Form.Control>
      <Button variant="success" type="submit">Post</Button>
      </Form>

      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        See Comments
      </Button>

      <Collapse in={open}>
        <div id="example-collapse-text">
        
        {
        post.comments.length ? 

        <>

          {
            post.comments.map((comment) => {
              return (
                <p>{comment.comment}</p>
              )
            })
          }
        
        </>

        : <p>No comments yet</p>
      }

        </div>
      </Collapse>

     
</div>
  )
}

export default CommentBox

{/* <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        See comments
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse> */}