import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const AllProduct = () => {
    const products=useLoaderData();
    return (
        <div className='grid w-[94%] mx-auto gap-8 md:grid-cols-2  lg:grid-cols-3'>
            {
                products.map(sproduct => <ProductCard key={sproduct.id} product={sproduct}  ></ProductCard>)
            }
        </div>
    );
};

export default AllProduct;