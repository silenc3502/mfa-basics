import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPosts } from '../api';
import { useStore } from '../store';
import BoardListForm from './BoardListForm';

const BoardListPage: React.FC = () => {
    const posts = useQuery('posts', getPosts);
    const addPost = useStore(state => state.addPost);

    const handleAddPost = () => {
        const newPostId = Math.floor(Math.random() * 100) + 1;
        addPost(newPostId);
    };

    if (posts.isLoading) {
        return <p>Loading...</p>;
    }

    if (posts.isError) {
        return <p>Error fetching posts.</p>;
    }

    if (posts.data.length === 0) {
        return <p>등록된 정보가 없습니다.</p>;
    }

    return (
        <div>
            <BoardListForm onAddPost={handleAddPost} />

            <ul>
                {posts.data.map(post => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BoardListPage;
