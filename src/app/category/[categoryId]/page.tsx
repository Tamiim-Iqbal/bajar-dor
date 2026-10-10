import { Product, toBanglaNumber } from "../../ContextAPI";
import ProductList from "@/app/Components/SortedProducts";

type PageProps = {
    params: Promise<{ categoryId: string }>;
};

const Page = async ({ params }: PageProps) => {
    const { categoryId } = await params;

    const response = await fetch(
        `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
        {
            cache: "force-cache",
        }
    );

    const data: Product[] = await response.json();

    return (
        <div className="w-11/12 lg:w-10/12 mx-auto mt-4 sm:mt-5 lg:mt-6 mb-8 sm:mb-10">

            {/* Category Header */}
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl flex items-center gap-3 sm:gap-4 border border-gray-200">

                <span className="text-3xl sm:text-4xl shrink-0">
                    {data[0]?.categoryIcon}
                </span>

                <div className="min-w-0">
                    <h2 className="text-xl sm:text-2xl font-semibold font-noto">
                        {data[0]?.categoryNameBn}
                    </h2>

                    <p className="text-gray-500 text-xs sm:text-sm mt-1 font-noto">
                        {toBanglaNumber(data.length)}
                        টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </div>
            </div>

            {/* Product List */}
            <div className="mt-4 sm:mt-5">
                <ProductList products={data} />
            </div>

        </div>
    );
};

export default Page;