import React from 'react'
import { UserContext } from '../context/UserContext'
import { formatISO9075 } from 'date-fns'
import { Link } from 'react-router-dom'

function Post({title,summary,image,content,createdAt,author,_id}) {
  return (
            <Link to={`/post/${_id}` } style={{textDecoration:"none", color: 'black'}}>
      <div className="post">
          <div className="image">
                <img src={'http://localhost:4000/'+image} alt="Image" />
            
          </div>
          <div className="texts">  
            <h2>{title}</h2>
            <p className="info">
            {author ? (
            <a className="author">{author.username}</a>
          ) : (
            <a className="author">Sakshi</a>
          )}
              <time>{formatISO9075(new Date(createdAt))}</time>
            </p>
            <p className="summary"> 
              {summary}
            </p>
          </div>
        </div>
        </Link>
  )
}

export default Post
