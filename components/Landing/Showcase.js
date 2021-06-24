import { useState, useEffect } from 'react';
import { getProductByType  } from '../Products/bl';
import Layout from '../Products/Layout';

export default function Showcase() {
    const [ product, setProduct] = useState(false);

    useEffect( async ()=>{
        const response = await getProductByType("ACCESSORIES", 3);
        setProduct(response);
    },[])
    return (
        <Layout products={product} category="accessories"/>
    )
}