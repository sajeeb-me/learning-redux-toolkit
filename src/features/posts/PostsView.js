import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from './postsSlice';

const PostsView = () => {
    const { isLoading, posts, error } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [])


    return (
        <div>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            <section>
                {
                    posts && posts.map((post) => {
                        const { id, title, body } = post;
                        return <article key={id}>
                            <h5>{title}</h5>
                            <p>{body}</p>
                        </article>
                    })
                }
            </section>
        </div>
    );
};

export default PostsView;