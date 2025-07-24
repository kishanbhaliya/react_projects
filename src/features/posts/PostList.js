import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, postDeleted } from './postsSlice';

export const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  const postStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  return (
    <div>
      <h2>📃 Posts</h2>
      {postStatus === 'loading' ? <p>Loading...</p> : null}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <button onClick={() => dispatch(postDeleted(post.id))}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
