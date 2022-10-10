import React from 'react';
import { Link } from 'react-router-dom';
import './SinglePost.css'
const SinglePost = ({post}) => {
  const {id,title,body} = post
  return (
    <div className='singlepost-design'>
      <h2>Post Id : {id}</h2>
      <h3>Title : {title}</h3>
      <p>Description : {body}</p>
      <Link to={`/post/${id}`}>See details</Link>
    </div>
  );
};

export default SinglePost;