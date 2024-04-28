import './Post.css';
import { MoreVert } from '@mui/icons-material';

import { Users } from '../../dummyData';
import { useState } from 'react';


export default function Post({ post }) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }


    //  console.log(post)   this is used to check the data , if we are getting the correct data or not

    /*
    // Methods used to get the username and userprofile
    const user = Users.filter(u => u.id === 1)
    console.log(user[0].username)
    */

    // here we are fetching username from dummyData.js for each of the users using filter method
    const username = Users.filter((u) =>
        u.id === post.userId
    )[0].username

    // setting up profile pictures from dummyData.js to the each users
    const userProfile = Users.filter((u) => u.id === post.userId)[0].profilePicture

    return (
        <div className='post'>
            <div className='post-wrapper'>
                <div className='post-top'>
                    <div className='postTop-left'>
                        <img className='post-profile-img' src={userProfile} alt='' />
                        <span className='post-username'>{username}</span>
                        <span className='post-date'>{post.date}</span>
                    </div>
                    <div className='postTop-right'>
                        <MoreVert />
                    </div>
                </div>
                <div className='post-center'>
                    <span className='post-text'>{post?.desc}</span>
                    {/* the question mark show that if there is no desc available in the api, it doesn't show any error */}
                    <img className='post-img' src={post.photo} alt='' />
                </div>
                <div className='post-bottom'>
                    <div className='postBottom-left'>
                        <img className='like-icon' src="assets/like.png" onClick={likeHandler} alt='' />
                        <img className='like-icon' src="assets/heart.png" onClick={likeHandler} alt='' />
                        <span className='post-like-counter'>{like} people like it</span>
                    </div>
                    <div className='postBottom-right'>
                        <span className='post-commentText'>{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
