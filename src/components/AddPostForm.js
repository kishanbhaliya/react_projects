import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPost } from '../features/posts/postsSlice';

export const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            dispatch(addNewPost({ title, body: "Demo post content "}));
            setTitle();
        }
    };

    return (
        <form onSubmit={ onSubmit }>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Post title'
            />
        </form>
    );
};