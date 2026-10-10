'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Product, toBanglaNumber } from '../ContextAPI';
import ProductCard from './ProductCard';

type Props = {
    products: Product[];
};

const SortedProducts = ({ products }: Props) => {
    const [sortBy, setSortBy] = useState('default');
    const dropdownRef = useRef<HTMLDetailsElement>(null);

    useEffect(() => {
        if (dropdownRef.current) {
            dropdownRef.current.open = false;
        }
    }, []);

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
            {/* Product Count & Sorting */}
            <section className="flex items-center justify-between gap-2">
                <p className="text-gray-600 text-xs sm:text-sm font-noto">
                    মোট {toBanglaNumber(products.length)}টি পণ্য দেখানো হচ্ছে
                </p>

                <div className="font-noto flex items-center gap-1.5 sm:gap-3 shrink-0">
                    <label className="text-gray-600 text-xs sm:text-sm">
                        সাজান
                    </label>

                    <details ref={dropdownRef} className="dropdown">
                        <summary
                            className="list-none cursor-pointer group flex items-center justify-between gap-1.5 sm:gap-2 bg-white border border-gray-300 rounded-lg px-2.5 sm:px-4 py-1.5 text-gray-600 text-xs sm:text-sm focus:outline-2 focus:outline-gray-700 focus:outline-offset-2"
                        >
                            <span>{selectedOption?.label}</span>

                            <span className="inline-block rotate-90 transition-transform duration-200 group-open:-rotate-90">
                                ▸
                            </span>
                        </summary>

                        <ul className="dropdown-content menu bg-white border border-gray-200 rounded-lg z-50 w-max min-w-full p-1 shadow-md mt-2 text-gray-600 right-0">
                            {sortOptions.map((option) => (
                                <li key={option.value}>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            setSortBy(option.value);

                                            const dropdown =
                                                e.currentTarget.closest('details');

                                            if (dropdown) {
                                                dropdown.open = false;
                                            }
                                        }}
                                        className="flex flex-row items-center gap-2 whitespace-nowrap text-xs sm:text-sm"
                                    >
                                        <span className="w-3 shrink-0">
                                            {sortBy === option.value ? '✓' : ''}
                                        </span>

                                        <span>{option.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </details>
                </div>
            </section>

            {/* Responsive Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-3 sm:mt-4 gap-2.5 sm:gap-4 lg:gap-5">
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

export default SortedProducts;

