import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const Posts = () => {
  const allPosts = useLoaderData()
  console.log(allPosts)
  return (
    <div>
      {
        allPosts.map(post => <SinglePost key={post.id} post={post}></SinglePost>)
      }
    </div>
  );
};

export default Posts;