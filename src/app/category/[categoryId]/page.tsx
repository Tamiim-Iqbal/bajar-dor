
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
        <div className="w-10/12 mx-auto mt-5 mb-10">
            <div className="bg-white p-5 rounded-3xl flex items-center gap-4 border border-gray-200">
                <span className="text-4xl">
                    {data[0]?.categoryIcon}
                </span>

                <div>
                    <h2 className="text-2xl font-semibold">
                        {data[0]?.categoryNameBn}
                    </h2>

                    <p className="text-gray-500">
                        {toBanglaNumber(data.length)}
                        টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </div>
            </div>

            <div className="mt-5">
                <ProductList products={data} />
            </div>
        </div>
    );
}

export default Page;