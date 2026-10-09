import React from 'react';
import { Product, toBanglaUnit } from '../ContextAPI';
import { toBanglaNumber } from '../ContextAPI';
import Link from 'next/link';

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Link href={`/product/${product.slug}`}>
        <div className="bg-white border border-gray-200 p-4 rounded-2xl">
            {/* Image & Name */}
            <div className="flex gap-3 items-center">
                <div>
                    <span className="bg-[#f0f5f0] text-xl px-3 py-1 rounded-xl">{product.image}</span>
                </div>
                <div>
                    <h3 className="font-noto text-lg font-medium">{product.nameBn}</h3>
                    <p className="font-noto text-gray-500 text-xs">প্রতি {toBanglaUnit(product.unit)}</p>
                </div>
            </div>

            <p className="mt-3 mb-1 font-noto text-gray-500 text-xs">আজকের দাম</p>
            {/* Price & PCT */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="font-noto"><span className="text-xl font-medium mr-1">{toBanglaNumber(product.today)}</span>টাকা</h2>
                </div>
                <div className="text-xs bg-[#f0f5f0] px-2 py-1 font-semibold rounded-xl">
                    {
                        product.change.dir === "up" ? <div>
                            <span className="text-red-600">▲</span>
                            <span className="text-red-600 font-noto ml-1">{toBanglaNumber(product.change.pct)}%</span>
                        </div>
                        :
                        <div>
                            <span className="text-green-600">▼</span>
                            <span className="text-green-600 font-noto ml-1">{toBanglaNumber(Math.abs(product.change.pct))}%</span>
                        </div>
                    }
                </div>
            </div>
        </div>
        
        </Link>
    );
};

export default ProductCard;