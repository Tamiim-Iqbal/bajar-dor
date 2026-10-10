import React from "react";
import { Product, toBanglaNumber, toBanglaUnit } from "../../ContextAPI";
import Link from "next/link";
import { Table } from "@heroui/react";

type PageProps = {
    params: Promise<{ productId: string }>;
};

const Page = async ({ params }: PageProps) => {
    const { productId } = await params;

    // প্রথমে product list fetch
    const listResponse = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/products",
        { cache: "force-cache" }
    );

    const products = await listResponse.json();

    // URL-এর slug দিয়ে product খুঁজে বের করা
    const findProduct = products.find(
        (item: { slug: string; id: number }) => item.slug === productId
    );

    if (!findProduct) {
        return <p>পণ্যটি পাওয়া যায়নি।</p>;
    }

    // Product details fetch
    const response = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products/${findProduct.id}`,
        { cache: "force-cache" }
    );

    if (!response.ok) {
        throw new Error("Product fetch failed");
    }

    const data: Product = await response.json();

    const minPrice = Math.min(
        ...data.markets.map((market) => market.min)
    );
    const maxPrice = Math.max(
        ...data.markets.map((market) => market.max)
    );
    const avgPrice =
        data.markets.reduce(
            (total, market) => total + (market.min + market.max) / 2,
            0
        ) / data.markets.length;

    // মূল array পরিবর্তন না করে sort
    const tableData = [...data.markets].sort(
        (a, b) => a.min - b.min
    );

    return (
        <div className="w-10/12 mx-auto mt-6 mb-10">
            {/* Breadcrumbs */}
            <div className="mb-6">
                <p className="text-gray-600 text-sm font-medium">
                    <Link href="/" className="hover:underline">
                        হোম
                    </Link>

                    <span className="mx-3">{">"}</span>

                    <Link
                        href={`/category/${data.category}`}
                        className="hover:underline"
                    >
                        {data.categoryNameBn}
                    </Link>

                    <span className="mx-3">{">"}</span>
                    <span>{data.nameBn}</span>
                </p>
            </div>

            {/* Product Banner */}
            <div className="bg-white border border-gray-200 p-6 rounded-2xl flex flex-col md:flex-row md:justify-between gap-5">
                {/* Product Name & Icon */}
                <div className="flex gap-4 items-center">
                    <div>
                        <span className="bg-[#f0f5f0] text-4xl px-6 py-3 rounded-2xl">
                            {data.image}
                        </span>
                    </div>

                    <div>
                        <h3 className="font-noto text-3xl font-semibold">
                            {data.nameBn}
                        </h3>

                        <p className="font-noto text-gray-600 text-sm">
                            প্রতি {toBanglaUnit(data.unit)}・
                            {data.categoryNameBn}
                        </p>

                        <div className="text-gray-500 mt-1 font-noto text-sm">
                            {data.change.dir === "up" ? (
                                <div>
                                    গতকালের তুলনায় আজ দাম{" "}
                                    <span className="font-semibold">
                                        বেড়েছে
                                    </span>{" "}
                                    <span>
                                        {toBanglaNumber(data.change.pct)}%
                                    </span>
                                </div>
                            ) : (
                                <div>
                                    গতকালের তুলনায় আজ দাম{" "}
                                    <span className="font-semibold">
                                        কমেছে
                                    </span>{" "}
                                    <span>
                                        {toBanglaNumber(
                                            Math.abs(data.change.pct)
                                        )}
                                        %
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Price & Percentage */}
                <div className="bg-[#f0f5f0] p-5 rounded-2xl">
                    <div className="flex flex-col items-center">
                        <h2 className="text-gray-600 text-sm">
                            আজকের দাম
                        </h2>

                        <h1 className="text-3xl font-semibold font-noto">
                            {toBanglaNumber(data.today)}
                        </h1>

                        <p className="text-gray-600 text-sm">
                            টাকা / {toBanglaUnit(data.unit)}
                        </p>

                        <div className="text-sm">
                            {data.change.dir === "up" ? (
                                <div className="text-red-600 font-medium font-noto">
                                    ▲ {toBanglaNumber(data.change.pct)}%
                                </div>
                            ) : (
                                <div className="text-green-600 font-medium font-noto">
                                    ▼{" "}
                                    {toBanglaNumber(
                                        Math.abs(data.change.pct)
                                    )}
                                    %
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Price Summary */}
            <div className="bg-white border border-gray-200 p-6 rounded-3xl mt-7">
                <h1 className="text-lg font-medium font-noto mt-1">
                    দামের সারসংক্ষেপ
                </h1>

                <div className="mt-3">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {/* Minimum Price */}
                        <div className="border border-gray-200 py-4 px-6 rounded-2xl font-noto">
                            <p className="text-xs text-gray-600 font-medium">
                                সর্বনিম্ন দাম
                            </p>

                            <p className="text-green-600">
                                <span className="text-2xl font-bold">
                                    {toBanglaNumber(minPrice)}
                                </span>{" "}
                                <span className="text-sm font-medium">
                                    টাকা
                                </span>
                            </p>

                            <p className="text-xs text-gray-600">
                                সবচেয়ে কম দামের বাজার
                            </p>
                        </div>

                        {/* Maximum Price */}
                        <div className="border border-gray-200 py-4 px-6 rounded-2xl font-noto">
                            <p className="text-xs text-gray-600 font-medium">
                                সর্বোচ্চ দাম
                            </p>

                            <p className="text-red-600">
                                <span className="text-2xl font-bold">
                                    {toBanglaNumber(maxPrice)}
                                </span>{" "}
                                <span className="text-sm font-medium">
                                    টাকা
                                </span>
                            </p>

                            <p className="text-xs text-gray-600">
                                সবচেয়ে বেশি দামের বাজার
                            </p>
                        </div>

                        {/* Average Price */}
                        <div className="border border-gray-200 py-4 px-6 rounded-2xl font-noto">
                            <p className="text-xs text-gray-600 font-medium">
                                গড় দাম
                            </p>

                            <p className="text-orange-400">
                                <span className="text-2xl font-bold">
                                    {toBanglaNumber(Math.round(avgPrice))}
                                </span>{" "}
                                <span className="text-sm font-medium">
                                    টাকা
                                </span>
                            </p>

                            <p className="text-xs text-gray-600">
                                প্রতি {toBanglaUnit(data.unit)}-এর হিসাবে
                            </p>
                        </div>
                    </div>
                </div>

                {/* Market Price Table */}
                <h1 className="text-lg font-medium font-noto mt-6">
                    বাজারভিত্তিক আজকের দাম
                </h1>

                <div className="mt-3">
                    <Table
                        variant="secondary"
                        className="border border-gray-200 rounded-2xl"
                    >
                        <Table.ScrollContainer>
                            <Table.Content aria-label="বাজারভিত্তিক পণ্যের দাম">
                                <Table.Header className="font-noto">
                                    <Table.Column
                                        isRowHeader
                                        className="text-sm font-semibold text-black"
                                    >
                                        বাজার
                                    </Table.Column>

                                    <Table.Column className="text-sm font-semibold text-black">
                                        বিভাগ
                                    </Table.Column>

                                    <Table.Column className="text-sm font-semibold text-black">
                                        সর্বনিম্ন
                                    </Table.Column>

                                    <Table.Column className="text-sm font-semibold text-black">
                                        সর্বাধিক
                                    </Table.Column>

                                    <Table.Column className="text-sm font-semibold text-black">
                                        গড়
                                    </Table.Column>
                                </Table.Header>

                                <Table.Body className="font-noto">
                                    {tableData.map((market, index) => (
                                        <Table.Row key={index}>
                                            <Table.Cell className="font-medium">
                                                {market.market}
                                            </Table.Cell>

                                            <Table.Cell>
                                                {market.division}
                                            </Table.Cell>

                                            <Table.Cell>
                                                {toBanglaNumber(market.min)} টাকা
                                            </Table.Cell>

                                            <Table.Cell>
                                                {toBanglaNumber(market.max)} টাকা
                                            </Table.Cell>

                                            <Table.Cell className="font-medium">
                                                {toBanglaNumber(
                                                    (
                                                        (market.max + market.min) /
                                                        2
                                                    ).toFixed(2)
                                                )}{" "}
                                                টাকা
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table.Content>
                        </Table.ScrollContainer>
                    </Table>
                </div>
            </div>

            {/* Category Button */}
            <div className="mt-5 ml-3 flex">
                <Link href={`/category/${data.category}`}>
                    <div className="btn bg-transparent border border-transparent py-5 px-4 text-gray-600 font-noto hover:bg-gray-200 hover:border-gray-300 rounded-lg">
                        <span>{data.categoryIcon}</span>
                        <span className="font-medium">
                            সব {data.categoryNameBn}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Page;