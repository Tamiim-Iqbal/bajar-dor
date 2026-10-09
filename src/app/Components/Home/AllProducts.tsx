import React from 'react';
import { toBanglaNumber } from '../../ContextAPI';
import ProductCard from '../ProductCard';

import { Product } from '../../ContextAPI';

const AllProducts = async() => {
    const response = await fetch('https://api.api-store.workers.dev/api/bazardor/products',
        {
            cache:'force-cache'
        }
    );
    const data: Product[] = await response.json();
    // console.log(data);

    return (
        <div id="সব-পণ্য" className="mt-10">
            <div>
                <h2 className="text-xl font-semibold">সব পণ্য</h2>
                <p className="text-gray-500 mt-2">মোট {toBanglaNumber(data.length)}টি পণ্য দেখানো হচ্ছে</p>
            </div>
            <div className="grid grid-cols-3 mt-4 gap-5">
            {
                data.map(product => <ProductCard key={product.id} product={product} />)
            }
            </div>
        </div>
    );
};

export default AllProducts;