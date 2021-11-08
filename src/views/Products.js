import React, {useState, useEffect} from "react";
import { Cart } from "../components/Cart";


export const Products = (props) => {
    const [posts, setProducts] = useState([]);

    useEffect(()=>{
        console.log('Effect called')
        fetch('https://kekambas-bs.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1>This is the Products Page</h1>
            
        </div>
        
    )
    
}