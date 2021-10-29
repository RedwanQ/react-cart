import React, { useState, useEffect } from 'react';


export const PostDetail = (props) =>{
    const [post, setPost] = useState({});
    useEffect(() => {
        console.log(props.match.params.id)
        fetch(`http://localhost:5000/api/posts/${props.match.params.id}`)
        .then(res => res.json())
        .then(data => console.log(data))
        setPost({id: 1, title: 'Test'})
    }, [props.match.params.id])
    return (
        <div key={post.id} className="card my-3">
            <div className="card-header">
                {post.title}
            </div>
        </div>
    )
}