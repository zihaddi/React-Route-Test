import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PostDetails = () => {
  const postDetails = useLoaderData()
  const {id,title,body} = postDetails
  return (
    <div className='singlepost-design'>
    <h2>Post Id : {id}</h2>
    <h3>Title : {title}</h3>
    <p>Description : {body}</p>
    <Link to='/posts'>Go Back</Link>
  </div>
  );
};

export default PostDetails;