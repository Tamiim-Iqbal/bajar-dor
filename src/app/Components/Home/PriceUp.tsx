import React from 'react';
import { Product } from '../../ContextAPI';
import ProductCard from '../ProductCard';

const PriceUp = async() => {

    const response = await fetch('https://api.api-store.workers.dev/api/bazardor/products',
        {
            cache:'force-cache'
        }
    );
    const data: Product[] = await response.json();
    // console.log(data);

    const upProducts = data.filter(product => product.change.dir === "up");
    upProducts.sort((a, b) => b.change.pct - a.change.pct);

    return (
        <div className="mt-10">
            <div className="mb-4">
                <h2 className="text-xl font-semibold"><span className="text-red-600 mr-2">▲</span>আজ দাম বেড়েছে</h2>
            </div> 
            <div className="grid grid-cols-3 mt-2 gap-5">
            {
                upProducts.slice(0,6).map(product => <ProductCard key={product.id} product={product} />)
            }
            </div>
        </div>
    );
};

export default PriceUp;