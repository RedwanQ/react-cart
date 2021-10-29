import React, { useState, useEffect } from 'react';


export const PostDetail = (props) =>{
    const [post, setPost] = useState({});
    const postId = props.match.params.id;
    useEffect(() => {
        fetch(`http://localhost:5000/api/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])
    return <div className="card my-3">
                <div className="card-header">
                    {post.title}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                    <p>{post.body}</p>
                    <footer className="blockquote-footer">{post.content} <cite title="Source Title">{post.date_created}</cite></footer>
                    </blockquote>
                </div>
            </div>
}