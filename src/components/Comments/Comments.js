import React, { useState, useEffect } from 'react';
import comments from './sampleComments'
import './Comments.scss'

const Comments = ({trailID}) => {
  const [commentLog, setCommentLog] = useState(comments)


  // On mount, query the server, setCommentLog to all comments in the server
  // with the trailID
  // useEffect(() => {

  // }, [])

  const commentList = commentLog.map(comment => {
    return (
      <article key={comment.id} className='comment'>
        <p className='comment-content'>{comment.content}</p>
      </article>
    )
  })

  return (
    <section className='comments-container'>
      <h2 className='comments-title'>Comments</h2>
      {commentLog && commentList}
    </section>
  );
}

export default Comments;
