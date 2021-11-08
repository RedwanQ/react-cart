import React, { useState, useEffect } from 'react';


export const Product = (props) =>{
    const [product, setProduct] = useState({
        name: null,
        description: null,
        price: null,
    });
    const prID = props.match.params.id;
    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${prID}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    } )
    return <div className="card my-3">
                <div className="card-header">
                    {product.name}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                    <p>{product.description}</p>
                    
                    <footer className="blockquote-footer"> <cite title="Source Title">{product.price}</cite></footer>
                    </blockquote>
                </div>
            </div>
}