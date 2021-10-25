import React, { useState, useEffect } from 'react';
import comments from './sampleComments'
import './Comments.scss'

const Comments = ({comments}) => {

  const commentList = comments.map(comment => {
    return (
      <article key={comment.id} className='comment'>
        <p className='comment-content'>{comment.content}</p>
      </article>
    )
  })

  return (
    <section className='comments-container'>
      <h2 className='comments-title'>Comments</h2>
      {commentList}
    </section>
  );
}

export default Comments;
