
'use client';

import React, { useState } from 'react';
import { Product, toBanglaNumber } from '../../ContextAPI';
import ProductCard from '../ProductCard';

type Props = {
    products: Product[];
};

const ProductList = ({ products }: Props) => {
    const [sortBy, setSortBy] = useState('default');

    const sortOptions = [
        { label: 'ডিফল্ট', value: 'default' },
        { label: 'দাম: কম থেকে বেশি', value: 'low-to-high' },
        { label: 'দাম: বেশি থেকে কম', value: 'high-to-low' },
    ];

    const selectedOption = sortOptions.find(
        (option) => option.value === sortBy
    );

    const sortedProducts = [...products].sort((a, b) => {
        if (sortBy === 'low-to-high') {
            return a.today - b.today;
        }

        if (sortBy === 'high-to-low') {
            return b.today - a.today;
        }

        return 0;
    });

    return (
        <>
            <section className="flex items-center justify-between">
                <p className="text-gray-600 text-sm">
                    মোট {toBanglaNumber(products.length)}টি পণ্য দেখানো হচ্ছে
                </p>

                <div className="font-noto flex items-center gap-3">
                    <label className="text-gray-600 text-sm">
                        সাজান
                    </label>

                    <div className="dropdown">
                        <button
                            type="button"
                            tabIndex={0}
                            className="group bg-white border border-gray-300
                            rounded-lg px-4 py-1.5 text-gray-600 text-sm
                            focus:outline-2 focus:outline-gray-700 focus:outline-offset-2 focus:border-gray-800"
                        >
                            {selectedOption?.label}

                            <span className="inline-block ml-2 rotate-90 transition-transform duration-200 group-focus:-rotate-90">
                                ▸
                            </span>
                        </button>

                        <ul
                            tabIndex={0}
                            className="dropdown-content menu
                                bg-white border border-gray-200
                                rounded-lg z-50 w-max min-w-full
                                p-1 shadow-md mt-3"
                        >
                            {sortOptions.map((option) => (
                                <li key={option.value}>
                                    <button
                                        type="button"
                                        onClick={() => setSortBy(option.value)}
                                        className={`text-gray-600 flex flex-row items-center
                                            gap-2 whitespace-nowrap text-sm 
                                            `}
                                            // ${sortBy === option.value
                                            //     ? 'text-green-700'
                                            //     : 'text-gray-700'
                                            // }
                                    >
                                        <span className="w-3 shrink-0">
                                            {sortBy === option.value ? '✓' : ''}
                                        </span>

                                        <span>{option.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-3 mt-4 gap-5">
                {sortedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    );
};

export default ProductList;

