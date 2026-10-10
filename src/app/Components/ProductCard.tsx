import React from 'react';
import { Product, toBanglaUnit, toBanglaNumber } from '../ContextAPI';
import Link from 'next/link';

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Link
            href={`/product/${product.slug}`}
            className="block h-full"
        >
            <div className="h-full bg-white border border-gray-200 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-colors hover:border-green-700">

                {/* Image & Name */}
                <div className="flex gap-2.5 sm:gap-3 items-center min-w-0">

                    <div className="shrink-0">
                        <span className="inline-flex items-center justify-center bg-[#f0f5f0] text-lg sm:text-xl px-2.5 sm:px-3 py-1 rounded-lg sm:rounded-xl">
                            {product.image}
                        </span>
                    </div>

                    <div className="min-w-0">
                        <h3 className="font-noto text-base sm:text-lg font-medium leading-snug">
                            {product.nameBn}
                        </h3>

                        <p className="font-noto text-gray-600 text-xs sm:text-sm mt-1">
                            প্রতি {toBanglaUnit(product.unit)}
                        </p>
                    </div>
                </div>

                {/* Today's Price Label */}
                <p className="mt-3 sm:mt-4 mb-1 font-noto text-gray-600 text-xs sm:text-sm">
                    আজকের দাম
                </p>

                {/* Price & Percentage */}
                <div className="flex items-center justify-between gap-2">

                    {/* Price */}
                    <div className="min-w-0">
                        <h2 className="font-noto flex items-baseline flex-wrap gap-x-1">
                            <span className="text-lg sm:text-xl font-medium">
                                {toBanglaNumber(product.today)}
                            </span>

                            <span className="text-sm sm:text-base">
                                টাকা
                            </span>
                        </h2>
                    </div>

                    {/* Price Change */}
                    <div className="shrink-0 text-[11px] sm:text-xs bg-[#f0f5f0] px-2 py-1 font-semibold rounded-lg sm:rounded-xl">
                        {product.change.dir === 'up' ? (
                            <div className="flex items-center">
                                <span className="text-red-600">▲</span>

                                <span className="text-red-600 font-noto ml-1">
                                    {toBanglaNumber(Math.abs(product.change.pct))}%
                                </span>
                            </div>
                        ) : product.change.dir === 'down' ? (
                            <div className="flex items-center">
                                <span className="text-green-600">▼</span>

                                <span className="text-green-600 font-noto ml-1">
                                    {toBanglaNumber(Math.abs(product.change.pct))}%
                                </span>
                            </div>
                        ) : (
                            <span className="font-noto text-gray-600">
                                অপরিবর্তিত
                            </span>
                        )}
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default ProductCard;

