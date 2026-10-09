import React from 'react';
import { Product, toBanglaNumber } from '../../ContextAPI';
import ProductCard from '@/app/Components/ProductCard';

const page = async ({ params }: { params: Product }) => {
    const { categoryId } = await params;
    console.log(categoryId);

    const response = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
        {
            cache: 'force-cache',
        }
    );
    const data: Product[] = await response.json();
    // console.log(data);
    return (
        <div className="w-10/12 mx-auto mt-5 mb-10 bg-[]">
            <div className="bg-white p-5 rounded-3xl flex items-center gap-4 border border-gray-200">
                <div>
                    <span className="text-4xl">{data[0]?.categoryIcon}</span>
                </div>
                <div>
                    <h2 className=" text-2xl font-semibold">{data[0]?.categoryNameBn}</h2>
                    <p className=" text-gray-500">{toBanglaNumber(data.length)}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>

            <p className="font-noto text-gray-500 mt-5">মোট {toBanglaNumber(data.length)}টি পণ্য দেখানো হচ্ছে</p>

            {/* Category Products */}
            <div className="grid grid-cols-3 mt-5 gap-5">
            {
                data.map(product => <ProductCard key={product.id} product={product} />)
            }
            </div>
            
            
        </div>
    );
};

export default page;