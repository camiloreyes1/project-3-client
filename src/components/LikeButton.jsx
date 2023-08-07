import  { useState } from 'react';
import { get } from '../services/authService';

const LikeButton = ({postId}) => {

  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);    

  const handleClick = (e) => {
    e.preventDefault()

    get(`/posts/addLike/${postId}`)
        if(isClicked) {
            setLikes(likes - 1)
        } else{
            setLikes(likes + 1)
        }
        setIsClicked(!isClicked)
        .then((likedPost) => {
            console.log("Liked Post", likedPost)
        })
        .catch((err) => {
            console.log(err)
            next(err)
        })
  }


  return (
    <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
      <span className="likes-counter">{ `Likes  ${likes}` }</span>
    </button>
  );
};

export default LikeButton;

