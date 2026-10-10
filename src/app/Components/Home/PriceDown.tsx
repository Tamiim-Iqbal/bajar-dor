import React from 'react';
import ProductCard from '../ProductCard';
import { Product } from '../../ContextAPI';

const PriceDown = async () => {
    const response = await fetch(
        'https://api.api-store.workers.dev/api/bazardor/products',
        {
            cache: 'force-cache',
        }
    );

    const data: Product[] = await response.json();

    const downProducts = data
        .filter((product) => product.change.dir === 'down')
        .sort((a, b) => b.change.pct - a.change.pct);

    return (
        <div className="mt-6 sm:mt-8 lg:mt-10">

            {/* Heading */}
            <div className="mb-3 sm:mb-4">
                <h2 className="text-lg sm:text-xl font-semibold font-noto">
                    <span className="text-green-600 mr-2">▼</span>
                    আজ দাম কমেছে
                </h2>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 mt-2 gap-3 sm:gap-4 lg:gap-5">
                {downProducts.slice(0, 6).map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default PriceDown;

