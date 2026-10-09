import React, { Suspense } from "react";
import { Product, toBanglaNumber, toBanglaUnit } from "../../ContextAPI";
import Link from "next/link";

type PageProps = {
    params: Promise<{ productId: string; }>;
};

const DetailsContent = async ({ params }: PageProps) => {
    const { productId } = await params;

    // প্রথমে product list fetch
    const listResponse = await fetch("https://api.api-store.workers.dev/api/bazardor/products",
        {
            cache: "force-cache",
        }
    );

    const products = await listResponse.json();

    // URL-এর slug দিয়ে product খুঁজে বের করা
    const findProduct = products.find(
        (item: { slug: string; id: number }) => item.slug === productId
    );

    if (!findProduct) {
        return <p>পণ্যটি পাওয়া যায়নি।</p>;
    }

    // পাওয়া ID দিয়ে details fetch
    const response = await fetch(
        `https://api.api-store.workers.dev/api/bazardor/products/${findProduct.id}`,
        {
            cache: "force-cache",
        });

    if (!response.ok) {
        throw new Error("Product fetch failed");
    }

    const data: Product = await response.json();

    const minPrice = Math.min(
        ...data.markets.map((market: { min: number }) => market.min)
    );
    const maxPrice = Math.max(
        ...data.markets.map((market: { max: number }) => market.max)
    );
    const avgPrice =
        data.markets.reduce(
            (total, market) => total + (market.min + market.max) / 2,
            0
        ) / data.markets.length;

    return (
        <div className="w-10/12 mx-auto mt-6 mb-10">
            {/* Bread crumbs */}
            <div className="mb-6">
                <p className="text-gray-600 text-sm">
                    <Link href="/" className="hover:underline">হোম</Link>
                    <span className="mx-3">{`>`}</span>
                    <Link href={`/category/${data.category}`} className="hover:underline">{data.categoryNameBn}</Link>
                    <span className="mx-3">{`>`}</span>
                    <span>{data.nameBn}</span>

                </p>
            </div>

            {/* Details Hero/Banner */}
            <div className="bg-white border border-gray-200 p-6 rounded-2xl flex justify-between">
                {/* Left : Name & Icon */}
                <div className="flex gap-4 items-center">
                    <div>
                        <span className="bg-[#f0f5f0] text-4xl px-6 py-3 rounded-2xl">{data.image}</span>
                    </div>
                    <div>
                        <h3 className="font-noto text-3xl font-semibold">{data.nameBn}</h3>
                        <p className="font-noto text-gray-500 text-sm">প্রতি {toBanglaUnit(data.unit)}・{data.categoryNameBn}</p>
                        <p className=" text-gray-500 mt-1 font-noto text-sm">
                            {
                                data.change.dir === "up" ?
                                    <div>
                                        গতকালের তুলনায় আজ দাম <span className="font-semibold">বেড়েছে </span>
                                        <span className="font-noto">{toBanglaNumber(data.change.pct)}%</span>
                                    </div>
                                    :
                                    <div>
                                        কমেছে {Math.abs(data.change.pct)}
                                    </div>
                            }
                        </p>
                    </div>
                </div>

                {/* Right: Price & PCT */}
                <div className="bg-[#f0f5f0]  p-5 rounded-2xl">
                    <div className="flex flex-col items-center">
                        <h2 className="text-gray-500 text-sm">আজকের দাম</h2>
                        <h1 className="text-3xl font-semibold font-noto">{toBanglaNumber(data.today)}</h1>
                        <p className="text-gray-500 text-sm">টাকা / {toBanglaUnit(data.unit)}</p>
                        <p className="text-sm">
                            {
                                data.change.dir === "up" ?
                                    <div className="text-red-600 font-medium font-noto">
                                        ▲ {toBanglaNumber(data.change.pct)}%
                                    </div>
                                    :
                                    <div className="text-green-600 font-medium font-noto">
                                        ▼ {toBanglaNumber(Math.abs(data.change.pct))}%
                                    </div>
                            }
                        </p>
                    </div>
                </div>
            </div>

            {/* Details Content */}
            <div className="bg-white border border-gray-200 p-5 rounded-2xl mt-7">
                {/* Card */}
                <h1 className="text-lg font-medium font-noto mt-1">দামের সারসংক্ষেপ</h1>
                <div className="mt-3">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {/* Minimum Price */}
                        <div className="border border-gray-200 py-4 px-6 rounded-2xl font-noto">
                            <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
                            <p className="text-green-600">
                                <span className="text-2xl font-bold">
                                    {toBanglaNumber(minPrice)}
                                </span>
                                <span className="text-sm font-medium"> টাকা</span>
                            </p>
                            <p className="text-xs text-gray-500">
                                সবচেয়ে কম দামের বাজার
                            </p>
                        </div>

                        {/* Maximum Price */}
                        <div className="border border-gray-200 py-4 px-6 rounded-2xl font-noto">
                            <p className="text-xs text-gray-500">সর্বোচ্চ দাম</p>
                            <p className="text-red-600">
                                <span className="text-2xl font-bold">
                                    {toBanglaNumber(maxPrice)}
                                </span>
                                <span className="text-sm font-medium"> টাকা</span>
                            </p>
                            <p className="text-xs text-gray-500">
                                সবচেয়ে বেশি দামের বাজার
                            </p>
                        </div>

                        {/* Average Price */}
                        <div className="border border-gray-200 py-4 px-6 rounded-2xl font-noto">
                            <p className="text-xs text-gray-500">গড় দাম</p>
                            <p className="text-orange-400">
                                <span className="text-2xl font-bold">
                                    {toBanglaNumber(Math.round(avgPrice))}
                                </span>
                                <span className="text-sm font-medium"> টাকা</span>
                            </p>
                            <p className="text-xs text-gray-500">
                                প্রতি {toBanglaUnit(data.unit)}-এর হিসাবে
                            </p>
                        </div>
                    </div>
                </div>
                {/* Table */}
                <h1 className="text-lg font-medium font-noto mt-5">বাজারভিত্তিক আজকের দাম</h1>
                <div>
                    
                </div>
                
                <div>

                </div>
            </div>
        </div>

    );
};

export default function Page({ params }: PageProps) {
    return (
        <Suspense fallback={<p className="text-center mt-10">লোড হচ্ছে...</p>}>
            <DetailsContent params={params} />
        </Suspense>
    );
}