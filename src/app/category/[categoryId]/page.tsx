import React, { Suspense } from "react";
import { Product, toBanglaNumber } from "../../ContextAPI";
import ProductCard from "@/app/Components/ProductCard";

type PageProps = {
    params: Promise<{categoryId: string;}>;
};

const CategoryContent = async ({ params }: PageProps) => {
    const { categoryId } = await params;
    const response = await fetch(`https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
    {
        cache: "force-cache",
    }
    );
    const data: Product[] = await response.json();
    // console.log(data);

    return (
        <div className="w-10/12 mx-auto mt-5 mb-10">
            <div className="bg-white p-5 rounded-3xl flex items-center gap-4 border border-gray-200">
                <span className="text-4xl">{data[0]?.categoryIcon}</span>
                <div>
                    <h2 className="text-2xl font-semibold"> {data[0]?.categoryNameBn} </h2>

                    <p className="text-gray-500"> {toBanglaNumber(data.length)}টি পণ্যের আজকের দাম ও পরিবর্তন </p>
                </div>
            </div>

            <p className="font-noto text-gray-500 mt-5"> মোট {toBanglaNumber(data.length)}টি পণ্য দেখানো হচ্ছে </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
                {data.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default function Page({ params }: PageProps) {
    return (
        <Suspense fallback={<p className="text-center mt-10">লোড হচ্ছে...</p>}>
            <CategoryContent params={params} />
        </Suspense>
    );
}