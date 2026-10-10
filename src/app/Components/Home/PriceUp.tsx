import React from 'react';
import { Product } from '../../ContextAPI';
import ProductCard from '../ProductCard';

const PriceUp = async () => {
    const response = await fetch(
        'https://openapi.programming-hero.com/api/bazardor/products'
    );

    const data: Product[] = await response.json();

    const upProducts = data
        .filter((product) => product.change.dir === 'up')
        .sort((a, b) => b.change.pct - a.change.pct);

    return (
        <div className="mt-6 sm:mt-8 lg:mt-10">

            {/* Heading */}
            <div className="mb-3 sm:mb-4">
                <h2 className="text-lg sm:text-xl font-semibold font-noto">
                    <span className="text-red-600 mr-2">▲</span>
                    আজ দাম বেড়েছে
                </h2>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 mt-2 gap-3 sm:gap-4 lg:gap-5">
                {upProducts.slice(0, 6).map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

        </div>
    );
};

export default PriceUp;

