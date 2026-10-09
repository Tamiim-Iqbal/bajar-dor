import React from 'react';
import ProductCard from '../ProductCard';
import { Product } from '../../ContextAPI';

const PriceDown = async() => {

    const response = await fetch('https://api.api-store.workers.dev/api/bazardor/products',
        {
            cache:'force-cache'
        }
    );
    const data: Product[] = await response.json();
    console.log(data);
    
    const downProducts = data.filter(product => product.change.dir === "down");
    downProducts.sort((a, b) => b.change.pct - a.change.pct);

    return (
        <div className="mt-10">
            <div className="mb-4">
                <h2 className="text-xl font-semibold"><span className="text-green-600 mr-2">▼</span>আজ দাম কমেছে</h2>
            </div>
            <div className="grid grid-cols-3 mt-2 gap-5">
            {
                downProducts.slice(0,6).map(product => <ProductCard key={product.id} product={product} />)
            }
            </div>
        </div>
        
    );
};

export default PriceDown;