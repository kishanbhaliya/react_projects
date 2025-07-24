import React from 'react';
import { PostList } from './features/posts/PostList';
import { AddPostForm } from './components/AddPostForm';

function App() {
    return (
        <div className='App'>
            <h1>📝 Post Manager</h1>
            <AddPostForm />
            <PostList />
        </div>
    );
}

export default App;