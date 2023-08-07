import  { useContext } from 'react';
import { PostContext } from '../context/posts.context';
import { get } from '../services/authService';

import Button from 'react-bootstrap/Button';



const LikeButton = ({postId, post, index}) => {

    const {posts, setPosts} = useContext(PostContext)


//   const [isClicked, setIsClicked] = useState(false);    

  const handleClick = (e) => {
    e.preventDefault()

    get(`/posts/like-button/${postId}`)

        .then((likedPost) => {
            let newPosts = [...posts]
            newPosts[index] = likedPost.data
            console.log("New posts", index, newPosts)
            setPosts(newPosts)
            console.log("Liked Post", likedPost)
        })
        .catch((err) => {
            console.log(err)
            next(err)
        })
  }


  return (
    <Button onClick={ handleClick }>
      <span className="likes-counter">{ `Likes  ${post.likes.length}` }</span>
    </Button>
  );
};

export default LikeButton;

