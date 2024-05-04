import React, { useState,useEffect,useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatISO9075 } from 'date-fns'
import { UserContext } from '../context/UserContext';

const PostPage = () => {
    const {id} = useParams();
    const [postInfo, setPostInfo] = useState(null);
    const {userInfo} = useContext(UserContext);
  
    useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then(response => {
      response.json().then(postInfo => {
        setPostInfo(postInfo);
      });
      });
  
  }, [id]);
  
  if(!postInfo) return '';
  console.log(userInfo);

    return (
    <div className='image_container'>

        <div className="heading">
            <h1>
                {postInfo.title}
            </h1>
                <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            <p className="info">
            {postInfo.author ? (
            <a className="author"> by {postInfo.author.username}</a>
          ) : (
            <a className="author">by @Sakshi</a>
          )}
            </p>
            {userInfo.id === postInfo.author._id && (
              <div className="edit-row">
                <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
                ⚡️ Edit
                  </Link>
              </div>
            )}
        </div>
        <div className="image_page">
        <img src={'http://localhost:4000/'+postInfo.image} alt="" />
        </div>

        <div className='complete_content' dangerouslySetInnerHTML={{__html:postInfo.content}}/>
        
    </div>
  )
}

export default PostPage